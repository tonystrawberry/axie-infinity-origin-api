package handlers

import (
	"bytes"
	"context"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"github.com/gorilla/mux"
	"github.com/stretchr/testify/assert"
	"google.golang.org/api/option"
)

var router *mux.Router
var firestoreClient *firestore.Client;

func TestMain(m *testing.M) {
	initializeFirebase()
	
	router = mux.NewRouter()
	router.Handle("/api/v1/health-check", firestoreHandler(firestoreClient, HandleGetHealthCheck)).Methods("GET")
	router.Handle("/api/v1/cards", firestoreHandler(firestoreClient, HandleGetCards)).Methods("GET")
	router.Handle("/api/v1/cards/{id}", firestoreHandler(firestoreClient, HandleGetCard)).Methods("GET")
	router.Handle("/api/v1/cards/search", firestoreHandler(firestoreClient, HandleSearchCards)).Methods("POST")
	code := m.Run()
	os.Exit(code)
}

func TestHealthCheck(t *testing.T) {
	req, _ := http.NewRequest("GET", "/api/v1/health-check", nil)
	resp := httptest.NewRecorder()
	router.ServeHTTP(resp, req)
	assert.Equal(t, 200, resp.Code, "OK response is expected")
}

func TestGetCards(t *testing.T) {
	req, _ := http.NewRequest("GET", "/api/v1/cards", nil)
	resp := httptest.NewRecorder()
	router.ServeHTTP(resp, req)
	assert.Equal(t, 200, resp.Code, "OK response is expected")
}

func TestGetCard(t *testing.T) {
	req, _ := http.NewRequest("GET", "/api/v1/cards/aquatic-back-anome", nil)
	resp := httptest.NewRecorder()
	router.ServeHTTP(resp, req)
	assert.Equal(t, 200, resp.Code, "OK response is expected")
}

func TestSearchCards(t *testing.T) {
	var jsonString = []byte(`{"class": ["aquatic"], "part": ["back"]}`)
	req, _ := http.NewRequest("POST", "/api/v1/cards/search", bytes.NewBuffer(jsonString))
	resp := httptest.NewRecorder()
	router.ServeHTTP(resp, req)
	assert.Equal(t, 200, resp.Code, "OK response is expected")
}

func initializeFirebase(){
	ctx := context.Background()
	opt := option.WithCredentialsFile("../credentials/serviceAccountKey.json")
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
