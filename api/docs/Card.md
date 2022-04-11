# Card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Class** | **string** |  | 
**Part** | **string** |  | 
**EnergyCost** | **int32** |  | 
**Value** | Pointer to **int32** |  | [optional] 
**Effect** | Pointer to **string** |  | [optional] 
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Abilities** | Pointer to **[]string** |  | [optional] 

## Methods

### NewCard

`func NewCard(id int32, class string, part string, energyCost int32, name string, ) *Card`

NewCard instantiates a new Card object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardWithDefaults

`func NewCardWithDefaults() *Card`

NewCardWithDefaults instantiates a new Card object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Card) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Card) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Card) SetId(v int32)`

SetId sets Id field to given value.


### GetClass

`func (o *Card) GetClass() string`

GetClass returns the Class field if non-nil, zero value otherwise.

### GetClassOk

`func (o *Card) GetClassOk() (*string, bool)`

GetClassOk returns a tuple with the Class field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClass

`func (o *Card) SetClass(v string)`

SetClass sets Class field to given value.


### GetPart

`func (o *Card) GetPart() string`

GetPart returns the Part field if non-nil, zero value otherwise.

### GetPartOk

`func (o *Card) GetPartOk() (*string, bool)`

GetPartOk returns a tuple with the Part field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPart

`func (o *Card) SetPart(v string)`

SetPart sets Part field to given value.


### GetEnergyCost

`func (o *Card) GetEnergyCost() int32`

GetEnergyCost returns the EnergyCost field if non-nil, zero value otherwise.

### GetEnergyCostOk

`func (o *Card) GetEnergyCostOk() (*int32, bool)`

GetEnergyCostOk returns a tuple with the EnergyCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergyCost

`func (o *Card) SetEnergyCost(v int32)`

SetEnergyCost sets EnergyCost field to given value.


### GetValue

`func (o *Card) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Card) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Card) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *Card) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetEffect

`func (o *Card) GetEffect() string`

GetEffect returns the Effect field if non-nil, zero value otherwise.

### GetEffectOk

`func (o *Card) GetEffectOk() (*string, bool)`

GetEffectOk returns a tuple with the Effect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffect

`func (o *Card) SetEffect(v string)`

SetEffect sets Effect field to given value.

### HasEffect

`func (o *Card) HasEffect() bool`

HasEffect returns a boolean if a field has been set.

### GetName

`func (o *Card) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Card) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Card) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Card) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Card) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Card) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Card) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAbilities

`func (o *Card) GetAbilities() []string`

GetAbilities returns the Abilities field if non-nil, zero value otherwise.

### GetAbilitiesOk

`func (o *Card) GetAbilitiesOk() (*[]string, bool)`

GetAbilitiesOk returns a tuple with the Abilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbilities

`func (o *Card) SetAbilities(v []string)`

SetAbilities sets Abilities field to given value.

### HasAbilities

`func (o *Card) HasAbilities() bool`

HasAbilities returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


