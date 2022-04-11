package main

import (
	"context"
	"log"
	"net/http"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"github.com/gorilla/mux"
	"github.com/tonystrawberry/axie-infinity-origin-api/server/handlers"
	"google.golang.org/api/option"
)

var firestoreClient *firestore.Client;

func main(){
	initializeFirebase()

	// Web Server
	router := mux.NewRouter()

	//specify endpoints, handler functions and HTTP method
	router.Handle("/api/v1/health-check", firestoreHandler(firestoreClient, handlers.HandleGetHealthCheck)).Methods("GET")
	router.Handle("/api/v1/cards", firestoreHandler(firestoreClient, handlers.HandleGetCards)).Methods("GET")
	router.Handle("/api/v1/cards/{id}", firestoreHandler(firestoreClient, handlers.HandleGetCard)).Methods("GET")
	router.Handle("/api/v1/cards/search", firestoreHandler(firestoreClient, handlers.HandleSearchCards)).Methods("POST")

	http.Handle("/", router)

	//start and listen to requests
	http.ListenAndServe(":8080", router)
}

func initializeFirebase(){
	ctx := context.Background()
	opt := option.WithCredentialsFile("credentials/serviceAccountKey.json")
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		log.Fatalln(err)
		return
	}

	firestoreClient, err = app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
}

func firestoreHandler(c *firestore.Client, f func(c *firestore.Client, w http.ResponseWriter, r *http.Request)) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) { f(c, w, r) })
}
