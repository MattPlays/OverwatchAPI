export interface OverwatchProfile {
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
    ratings: {
        level: number, 
        role: string, 
        roleIcon: string
    }[],
}