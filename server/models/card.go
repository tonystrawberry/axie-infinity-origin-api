package main

import (
	"errors"
)


type Card struct {
    ID    int     `json:"id"`
    Name  string  `json:"name"`
    Description string `json:"description"`
}

func (p *Card) getCard() error {
  return errors.New("Not implemented")
}

func (p *Card) searchCards() error {
  return errors.New("Not implemented")
}

func getCards(start, count int) ([]Card, error) {
  return nil, errors.New("Not implemented")
}
