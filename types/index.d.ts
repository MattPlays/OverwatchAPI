type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
type OverwatchRegion = "us" | "eu" | "asia";
type OverwatchHeros = ['ana' , 'ashe' , 'baptiste' , 'bastion' , 'brigitte' , 'doomfist' , 'dva' , 'echo' , 'genji' , 'hammond' , 'hanzo' , 'junkrat' , 'lucio' , 'mccree' , 'mei' , 'mercy' , 'moira' , 'orisa' , 'pharah' , 'reaper' , 'reinhardt' , 'roadhog' , 'sigma' , 'soldier' , 'sombra' , 'symmetra' , 'torbjorn' , 'tracer' , 'widowmaker' , 'winston' , 'zarya' , 'zenyatta'];
import { OverwatchProfile } from "./OverwatchProfile";
export class OverwatchAPI {
    constructor();
    GetProfile(platform: OverwatchPlatform, region: OverwatchRegion, battletag: string): Promise<OverwatchProfile>;
    GetCompleteStats(platform: OverwatchPlatform, region: OverwatchRegion, battletag: string): Promise<any>;
    GetHeroStats(platform: OverwatchPlatform, region: OverwatchRegion, battletag: string, heros: OverwatchHeros): Promise<any>;
}