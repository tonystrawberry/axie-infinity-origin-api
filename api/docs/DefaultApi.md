# \DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetApiV1Cards**](DefaultApi.md#GetApiV1Cards) | **Get** /api/v1/cards | Get All Cards
[**GetApiV1CardsId**](DefaultApi.md#GetApiV1CardsId) | **Get** /api/v1/cards/:id | Get Card by ID
[**GetApiV1CardsSearch**](DefaultApi.md#GetApiV1CardsSearch) | **Get** /api/v1/cards/search | Search for Cards



## GetApiV1Cards

> []Card GetApiV1Cards(ctx).Execute()

Get All Cards



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetApiV1Cards(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetApiV1Cards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApiV1Cards`: []Card
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetApiV1Cards`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetApiV1CardsRequest struct via the builder pattern


### Return type

[**[]Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetApiV1CardsId

> Card GetApiV1CardsId(ctx).Execute()

Get Card by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetApiV1CardsId(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetApiV1CardsId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApiV1CardsId`: Card
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetApiV1CardsId`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetApiV1CardsIdRequest struct via the builder pattern


### Return type

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetApiV1CardsSearch

> []Card GetApiV1CardsSearch(ctx).String_(string_).Class(class).Part(part).EnergyCost(energyCost).Tags(tags).Execute()

Search for Cards



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    string_ := "string__example" // string | Searched string (`name` and `description` fields) (optional)
    class := []string{"Class_example"} // []string | Searched classes (optional)
    part := []string{"Part_example"} // []string | Searched part (optional)
    energyCost := []string{"EnergyCost_example"} // []string | Search energy cost (optional)
    tags := []string{"Tags_example"} // []string | Searched tags (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetApiV1CardsSearch(context.Background()).String_(string_).Class(class).Part(part).EnergyCost(energyCost).Tags(tags).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetApiV1CardsSearch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApiV1CardsSearch`: []Card
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetApiV1CardsSearch`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetApiV1CardsSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_** | **string** | Searched string (&#x60;name&#x60; and &#x60;description&#x60; fields) | 
 **class** | **[]string** | Searched classes | 
 **part** | **[]string** | Searched part | 
 **energyCost** | **[]string** | Search energy cost | 
 **tags** | **[]string** | Searched tags | 

### Return type

[**[]Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

