const fetch = require("node-fetch")
const OverwatchProfile = require("./OverwatchProfile");
class OverwatchAPI {
    constructor() {
        this.api = "https://ow-api.com/v1/stats/"
        this.offical = false
    }
    /**
     * 
     * @param {"pc" | "xbox" | "ps4" | "nintendo-switch"} platform 
     * @param {"us" | "eu" | "asia";} region 
     * @param {string} battletag 
     * @returns {Promise<OverwatchProfile>}
     */
    GetProfile(platform, region, battletag) {
        let url = this.api + `${platform}/${region}/${battletag.replace("#", "-")}/profile`
        return fetch(url, {
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((temp) => {
            return new OverwatchProfile(temp.competitiveStats, temp.endorsement, temp.endorsementIcon, temp.gamesWon, temp.icon, temp.level, temp.levelIcon, temp.prestige, temp.prestigeIcon, temp.private, temp.quickPlayStats, temp.rating, temp.ratingIcon, temp.ratings);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * @param {"pc" | "xbox" | "ps4" | "nintendo-switch"} platform 
     * @param {"us" | "eu" | "asia";} region 
     * @param {string} battletag 
     * @returns {Promise<any>}
     */
    GetCompleteStats(platform, region, battletag) {
        let url = this.api + `${platform}/${region}/${battletag.replace("#", "-")}/complete`
        return fetch(url, {
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {return data}).catch((err) => {throw new Error(err)});
    }
    /**
     * @param {"pc" | "xbox" | "ps4" | "nintendo-switch"} platform 
     * @param {"us" | "eu" | "asia";} region 
     * @param {string} battletag 
     * @param {['ana' , 'ashe' , 'baptiste' , 'bastion' , 'brigitte' , 'doomfist' , 'dva' , 'echo' , 'genji' , 'hammond' , 'hanzo' , 'junkrat' , 'lucio' , 'mccree' , 'mei' , 'mercy' , 'moira' , 'orisa' , 'pharah' , 'reaper' , 'reinhardt' , 'roadhog' , 'sigma' , 'soldier' , 'sombra' , 'symmetra' , 'torbjorn' , 'tracer' , 'widowmaker' , 'winston' , 'zarya' , 'zenyatta']} heros 
     * @returns {Promise<any>}
     */
    GetHeroStats(platform, region, battletag, heros) {
        let url = this.api + `${platform}/${region}/${battletag.replace("#", "-")}/heroes/${heros.join()}`
        return fetch(url, {
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {return data}).catch((err) => {throw new Error(err)});
    }
}
module.exports = {
    OverwatchAPI: OverwatchAPI
}