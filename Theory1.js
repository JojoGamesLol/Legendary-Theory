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
var chapter1

var init = () => {
	currency = theory.createCurrency();
	
	// Regular Upgrades
	//chapter1
	{
        let getDesc = () => "Chapter 1";
        let getInfo = () => "Open a popup with chapter 1";
        chpater1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(800, 1.44)));
        chapter1.getDescription = (_) => getDesc();
        chapter1.getInfo = () => getInfo();
        chapter1.bought = (amount) = {
        	chapter1.level -= amount
        	chapter1Popup.show();
        }
    }
}

init();