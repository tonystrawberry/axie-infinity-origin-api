package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"cloud.google.com/go/firestore"
	"github.com/gorilla/mux"
	"google.golang.org/api/iterator"
)

type Card struct {
    ID string `json:"id"`
    Abilities []string `json:"abilities"`
    Description	string `json:"description"`
		Effect string `json:"effect"`
		EnergyCost int64 `json:"energyCost"`
		Name string `json:"name"`
		Part string `json:"part"`
		Value int64 `json:"value"`
}

type SearchRequest struct {
	String string `json:"string"`
	Class []string `json:"class"`
	Part []string `json:"part"`
	EnergyCost []int `json:"energyCost"`
	Tags []string `json:"tags"`
}


func HandleGetHealthCheck(c *firestore.Client, w http.ResponseWriter, r *http.Request) {
	log.Println("HandleGetHealthCheck")

	w.WriteHeader(200)
}

func HandleGetCards(c *firestore.Client, w http.ResponseWriter, r *http.Request) {
	log.Println("HandleGetCards")

	ctx := context.Background()

	iter := c.Collection("cards").OrderBy("name", firestore.Asc).Documents(ctx)

	cards := cardsFromIteration(iter)
	
	res, _ := json.Marshal(cards)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	w.Write(res)
}


func HandleGetCard(c *firestore.Client, w http.ResponseWriter, r *http.Request) {
	log.Println("HandleGetCard")

	ctx := context.Background()

	vars := mux.Vars(r)
	id := vars["id"]

	doc, err := c.Collection("cards").Doc(id).Get(ctx)
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	data := doc.Data()
	card := transformFirestoreDataToCard(doc.Ref.ID, data)

	res, _ := json.Marshal(card)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	w.Write(res)

}

func HandleSearchCards(c *firestore.Client, w http.ResponseWriter, r *http.Request) {
	log.Println("HandleSearchCards")

	ctx := context.Background()

	var searchRequest SearchRequest
	err := json.NewDecoder(r.Body).Decode(&searchRequest)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	collectionRef := c.Collection("cards")
	iter := collectionRef.Documents(ctx)
	aggregationCards := cardsFromIteration(iter)

	if searchRequest.String != "" {
		finalQuery := collectionRef.Where("string", "==", searchRequest.String)

		iter := finalQuery.Documents(ctx)
		cards := cardsFromIteration(iter)

		aggregationCards = intersection(aggregationCards, cards)
	}

	if len(searchRequest.Class) != 0 {
		finalQuery := collectionRef.Where("class", "in", searchRequest.Class)

		iter := finalQuery.Documents(ctx)
		cards := cardsFromIteration(iter)

		aggregationCards = intersection(aggregationCards, cards)
	}

	if len(searchRequest.Part) != 0 {
		finalQuery := collectionRef.Where("part", "in", searchRequest.Part)

		iter := finalQuery.Documents(ctx)
		cards := cardsFromIteration(iter)

		aggregationCards = intersection(aggregationCards, cards)
	}

	if len(searchRequest.EnergyCost) != 0 {
		finalQuery := collectionRef.Where("energyCost", "in", searchRequest.EnergyCost)

		iter := finalQuery.Documents(ctx)
		cards := cardsFromIteration(iter)

		aggregationCards = intersection(aggregationCards, cards)
	}

	if len(searchRequest.Tags) != 0 {
		finalQuery := collectionRef.Where("tags", "in", searchRequest.Tags)

		iter := finalQuery.Documents(ctx)
		cards := cardsFromIteration(iter)

		aggregationCards = append(aggregationCards, cards...)
	}

	res, _ := json.Marshal(removeDuplicates(aggregationCards))

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	w.Write(res)
}

func transformFirestoreDataToCard(id string, data map[string]interface{}) Card {
	var abilities []string
	for _, ability := range data["abilities"].([]interface {}) {
		abilities = append(abilities, fmt.Sprint(ability))
	}

	card := Card{
			ID: id,
			Abilities: abilities,
			Description: data["description"].(string),
			Effect: data["effect"].(string),
			EnergyCost: data["energyCost"].(int64),
			Name: data["name"].(string),
			Part: data["part"].(string),
			Value: data["value"].(int64),
		}

		return card
}

func removeDuplicates(cards []Card) []Card{
	withoutDuplicates := make([]Card, 0)
	ids := map[string]bool{}
	for _, card := range cards {
		if !ids[card.ID] {
			withoutDuplicates = append(withoutDuplicates, card)
			ids[card.ID] = true
		}
	}

	return withoutDuplicates
}

func intersection(a, b []Card) []Card {
	m := map[string]bool{}
	c := make([]Card, 0)

	for _, item := range a {
		m[item.ID] = true
	}

	for _, item := range b {
		if _, ok := m[item.ID]; ok {
			c = append(c, item)
		}
	}

	return c
}

func cardsFromIteration(iter *firestore.DocumentIterator) []Card {
	cards := make([]Card, 0)
	
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Fatalf("Failed to iterate: %v", err)
		}

		data := doc.Data()

		card := transformFirestoreDataToCard(doc.Ref.ID, data)
		cards = append(cards, card)
	}

	return cards
}

