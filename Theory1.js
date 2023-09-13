import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "CTRLCMD_Idle";
var name = "CTRL/CMD C Idle";
var description = "The progamming ctrl/cmd idle on exponential idle\nCTRL/CMD C on the exponential idle edititon";
var authors = "JojoGames320";
var version = "1.0.0";

var currency;

var init = () => {
	currency = theory.createCurrency();
}

init();