# OverwatchAPI
This package is a wrapper for the unofficial Overwatch API

1. [Overwatch](#overwatch)
    1. [Usage](#overwatch-usage)
    2. [Functions](#overwatch-functions)
        1. [GetProfile](#overwatch-getprofile)
            1. [Inputs](#overwatch-getprofile-inputs)
            2. [Output](#overwatch-getprofile-output)
            3. [Usage](#overwatch-getprofile-usage)
        2. [GetCompleteStats](#overwatch-getcompletestats)
            1. [Inputs](#overwatch-getcompletestats-inputs)
            2. [Output](#overwatch-getcompletestats-output)
            3. [Usage](#overwatch-getcompletestats-usage)
        3. [GetHeroStats](#overwatch-getherostats)
            1. [Inputs](#overwatch-getherostats-inputs)
            2. [Output](#overwatch-getherostats-output)
            3. [Usage](#overwatch-getherostats-usage)
    3. [Return Types](#overwatch-returntypes)
        1. [OverwatchProfile](#overwatch-returntypes-overwatchprofile)

## Overwatch <a id="overwatch">
**This is an Unoffical API** [Unoffical Docs](https://ow-api.com/docs/)
### Usage <a id="overwatch-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
```
### Functions <a id="overwatch-functions">
#### GetProfile <a id="overwatch-getprofile">
This endpoint retrieves stats commonly used by bots and other services.
##### Inputs <a id="overwatch-getprofile-inputs">
```typescript
export type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
export type OverwatchRegion = "us" | "eu" | "asia";
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform | `OverwatchPlatform` | Yes | The platform of the user |
| region  | `OverwatchRegion`  | Yes | The region of the user |
| battletag | `string` | Yes | The battletag of the user ie. My_Name_Is_Jeff_From_The_OW_Team#11561 |
##### Output <a id="overwatch-getprofile-output">
The GetProfile function returns a `Promise<OverwatchProfile>`
##### Usage <a id="overwatch-getprofile-usage">
```javascript
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
OverwatchAPI.GetProfile("pc", "us", "My_Name_Is_Jeff_From_The_OW_Team#11561").then((data) => {
// Your Code Here :D
})
```
#### GetCompleteStats <a id="overwatch-getcompletestats">
##### Inputs <a id="overwatch-getcompletestats-inputs">
```typescript
export type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
export type OverwatchRegion = "us" | "eu" | "asia";
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform | `OverwatchPlatform` | Yes | The platform of the user |
| region  | `OverwatchRegion`  | Yes | The region of the user |
| battletag | `string` | Yes | The battletag of the user ie. My_Name_Is_Jeff_From_The_OW_Team#11561 |
##### Output <a id="overwatch-getcompletestats-output">
The GetCompleteStats function returns something im too lazy to add type def for so `Promise<any>` is what you get.
##### Usage <a id="overwatch-getcompletestats-usage">
```javascript
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
OverwatchAPI.GetCompleteStats("pc", "us", "My_Name_Is_Jeff_From_The_OW_Team#11561").then((data) => {
// Your Code Here :D
})
```
#### GetHeroStats <a id="overwatch-getherostats">
##### Inputs <a id="overwatch-getherostats-inputs">
```typescript
export type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
export type OverwatchRegion = "us" | "eu" | "asia";
export type OverwatchHeros = ['ana' , 'ashe' , 'baptiste' , 'bastion' , 'brigitte' , 'doomfist' , 'dva' , 'echo' , 'genji' , 'hammond' , 'hanzo' , 'junkrat' , 'lucio' , 'mccree' , 'mei' , 'mercy' , 'moira' , 'orisa' , 'pharah' , 'reaper' , 'reinhardt' , 'roadhog' , 'sigma' , 'soldier' , 'sombra' , 'symmetra' , 'torbjorn' , 'tracer' , 'widowmaker' , 'winston' , 'zarya' , 'zenyatta'];
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform | `OverwatchPlatform` | Yes | The platform of the user |
| region  | `OverwatchRegion`  | Yes | The region of the user |
| battletag | `string` | Yes | The battletag of the user ie. My_Name_Is_Jeff_From_The_OW_Team#11561 |
| heros | `OverwatchHeros` | Yes | An Array of heros you want stats for.
##### Output <a id="overwatch-getherostats-output">
The GetHeroStats function returns something i was also too lazy to type def so `Promise<any>` is your best friend.
##### Usage <a id="overwatch-getherostats-usage">
```javascript
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
OverwatchAPI.GetHeroStats("pc", "us", "My_Name_Is_Jeff_From_The_OW_Team#11561", ["genji", "hanzo"]).then((data) => {
// Your Code Here :D
})
```
### Return Types <a id="overwatch-returntypes">
#### OverwatchProfile <a id="overwatch-returntypes-overwatchprofile">
```typescript
export type OverwatchProfile = {
    competitiveStats: {
        awards: {
            cards: number,
            medals: number,
            medalsBronze: number,
            medalsSilver: number,
            medalsGold: number
        },
        games: {
            played: number, 
            won: number
        },
    },
    endorsment: number,
    endorsementIcon: string,
    gamesWon: number,
    icon: string,
    level: number,
    levelIcon: string,
    name: string,
    prestige: number,
    prestigeIcon: string,
    private: boolean,
    quickPlayStats: {
        awards: {
            cards: number,
            medals: number,
            medalsBronze: number,
            medalsSilver: number,
            medalsGold: number,
        },
        games: {played: number, won: number},
    },
    rating: number,
    ratingIcon: string,
    ratings: [
        {
            level: number, 
            role: string, 
            roleIcon: string
        },
    ];
}
```