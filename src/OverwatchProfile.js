class OverwatchProfile {
    constructor(competitiveStats, endorsement, endorsementIcon, gamesWon, icon, level, levelIcon, prestige, prestigeIcon, privateProfile, quickPlayStats, rating, ratingIcon, ratingsArr) {
        this.competitiveStats = {
            awards: {
                cards: competitiveStats.awards.cards ?? null,
                medals: competitiveStats.awards.medals ?? null,
                medalsBronze: competitiveStats.awards.medalsBronze ?? null,
                medalsSilver: competitiveStats.awards.medalsSilver ?? null,
                medalsGold: competitiveStats.awards.medalsGold ?? null,
            },
            games: {
                played: competitiveStats.games.played ?? null,
                won: competitiveStats.games.won ?? null,
            },
        };
        this.endorsement = endorsement;
        this.endorsementIcon = endorsementIcon;
        this.gamesWon = gamesWon;
        this.icon = icon;
        this.level = level;
        this.levelIcon = levelIcon;
        this.prestige = prestige;
        this.prestigeIcon = prestigeIcon;
        this.private = privateProfile;
        this.quickPlayStats = {
            awards: {
                cards: quickPlayStats.awards.cards ?? null,
                medals: quickPlayStats.awards.medals ?? null,
                medalsBronze: quickPlayStats.awards.medalsBronze ?? null,
                medalsSilver: quickPlayStats.awards.medalsSilver ?? null,
                medalsGold: quickPlayStats.awards.medalsGold ?? null,
            },
            games: {
                played: quickPlayStats.games.played ?? null,
                won: quickPlayStats.games.won ?? null,
            },
        };
        this.rating = rating;
        this.ratingIcon = ratingIcon;
        this.ratings = ratingsArr.map((r) => {return {level: r.level, role: r.role, rankIcon: r.rankIcon, roleIcon: r.roleIcon}});
    }
}
module.exports = OverwatchProfile;