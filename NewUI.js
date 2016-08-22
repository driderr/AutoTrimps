//Thank you goes to AutoTrimps, Ishakaru, Zininzinin, and spindrjr for the original edition of this UI and settings scheme!

if (trimpzSettings === undefined) {
    var trimpzSettings = {};
}


automationMenuInit();
createSetting('portalAt', 'Portal Zone', 'Portal when this zone is reached', 'value', 146);
createSetting('challenge', 'Challenge', 'Challenge to run on portal', 'dropdown', 'Nom', ['None', 'Balance', 'Electricity', 'Crushed', 'Nom', 'Toxicity', 'Watch', 'Lead', 'Corrupted']);
createSetting('minimumUpgradesOnHand', 'Eq Upgrades on Hand', '0 will not run maps for equipment upgrades, 4 will run maps to keep 4 available equipment upgrades that will be autopurchased eventually', 'value', 4);
createSetting('doRunMapsForBonus', 'Map Bonus Runs', 'Enable running of maps to increase map bonus, based on difficulty of boss fight. Overridden by Better Map Runs', 'boolean', false);
createSetting('doRunMapsForEquipment', 'Loot Runs', 'Enable running of maps for loot if needed for boss fight, requires Map Bonus Runs to be on. Overridden by Better Map Runs', 'boolean', false);
createSetting('numberOfDeathsAllowedToKillBoss', 'Allowable Deaths', 'If map runs enabled, maps will run to keep you from dying this many times during boss fight(minimum of just under one)', 'value', 4);
createSetting('minimumWarpStations', 'Min Warpstations', 'Minimum number of warpstations on hand before buying a gigastation', 'value', 20);
createSetting('deltaIncreaseInMinimumWarpstationsPerGigastationPurchase', 'Warpstation Delta', 'Increase the minimum number of warpstations required to purchase a gigastation by this number for each gigastation purchased', 'value', 2);
createSetting('targetBreedTime', 'Breed Timer', 'Desired breed time in seconds for geneticist hiring and firing. Set this to 0 if you do not have Anticipation', 'value', 9);
createSetting('targetBreedTimeHysteresis', 'Breed Hysteresis', 'How many seconds over before we start firing Geneticists? This must be greater than 0 (not 0).', 'value', 1);
createSetting('CheapEquipmentRatio', 'Cheap Eq Ratio', '0.01 means buy equipment if it only costs 1% of resources, regardless of any other limits', 'value', 0.01);
createSetting('CheapEqUpgradeRatio', 'Cheap Eq Upgrades Ratio', '0.2 means buy equipment upgrades if it only costs 20% of resources, regardless of any other limits', 'value', 0.2);
createSetting('skipShieldBlock', 'Skip Shield Block', 'Will skip the shield block upgrade', 'boolean', true);
createSetting('minBreedingSpeed', 'Min Breeding Speed', 'Open traps if breeding speed is lower than this, in trimps/second', 'value', 100);
createSetting('runBionicWonderland', 'Run Bionic W.', 'Enable to run Bionic Wonderland as soon as it\'s available(for speed achievement)', 'boolean', false);
createSetting('shouldMaxOutToxicityHelium', 'Max Toxic Stacks', 'Max out toxicity stacks for maximum helium for bone trader during toxicity challenge', 'boolean', false);
createSetting('zoneToStartMaxingAt', 'Max-Out Toxic Zone Start', 'Zone to begin maxing toxicity stacks for maximum helium', 'value', 50);
createSetting('respecPheromones', 'Respec Breeding', 'Respec Pheromones down and bring back as needed.', 'boolean', false);
createSetting('limitEquipment', 'Limit Eq Levels', 'Sets max level for equipment. Recommended off for Better Map Runs and on for Bonus/Loot Runs', 'boolean', false);
createSetting('maxWormholes', 'Max Wormholes', 'Maximum number of Wormholes to buy with Helium.', 'value', 0);
createSetting('runMapsOnlyWhenNeeded', 'Better Map Runs', 'Run maps *only* when health or damage is needed. Overrides 2 Runs above. Much higher He/hr with this setting.', 'boolean', true);
createSetting('maxAttacksToKill', 'Max Hits To Kill', 'For Better Map Runs, acquire more damage if it takes more than this many (approx.) hits to kill the boss.', 'value', 4);
createSetting('minAttackstoDie', 'Min Hits to Die', 'For Better Map Runs, acquire more health if it takes fewer than this many (approx.) hits to die.', 'value', 30);
createSetting('oneShotRatio', 'One Shot Ratio', 'For loot runs, multiply enemy health by this to determine map level of one shot enemies.  0.5 would comparatively be 2 shots per enemy.  You may want this lower than 1 if you have Relentless or Titimp', 'value', 1);
createSetting('prestige', 'Prestige', 'Acquire prestiges through the selected item (inclusive) as soon as they are available in maps.', 'dropdown', 'Off', ['Off', 'Dagadder', 'Bootboost', 'Megamace', 'Hellishmet', 'Polierarm', 'Pantastic', 'Axeidic', 'Smoldershoulder', 'Greatersword', 'Bestplate', 'Harmbalest', 'GambesOP']);
createSetting('voidLevel', 'Void Level', 'The level/zone to run void maps at. 0 is off', 'value', 0);
createSetting('lastCell', 'Last Cell', 'Begin Toxic or Void after this cell in the zone. Later is better for Toxic and Void, but too late causes an issue when Javascript does its inevitable pausing, Trimps will play instant catch up based on time lapse on Javascript resuming, and Trimpz will not have a chance to see whatever cells were skipped.  This can lead to void or toxic being completely skipped if the cell is too late combined with a long enough Javascript pause.', 'value', 93);
createSetting('onlyVoidLevel', 'Only at Void Level', 'Should only run Void Maps at the Void Level? Disable to run Void Maps obtained after Void Level.', 'boolean', true);
createSetting('farmForVoid', 'Farm for Void', 'Should farm for damage and health before running Void Maps? Better Maps or Loot Runs are required.', 'boolean', false);
createSetting('staggerVoid', 'Stagger Void', 'Should wait to run void maps if they are too easy.  This helps with helium and getting loot when it is needed more.', 'boolean', false);
createSetting('AutoHeirlooms', 'ATs Heirlooms', 'AT: Automatically evaluate and carry the best heirlooms, and recommend upgrades for equipped items. AutoHeirlooms will only change carried items when the heirlooms window is not open. Carried items will be compared and swapped with the types that are already carried. If a carry spot is empty, it will be filled with the best shield (if available). Evaluation is based ONLY on the following mods (listed in order of priority, high to low): Void Map Drop Chance/Trimp Attack, Crit Chance/Crit Damage, Miner Efficiency/Metal Drop, Farmer/Lumberjack/Dragimp Efficiency. For the purposes of carrying, rarity trumps all of the stat evaluations. Empty mod slots are valued at the average value of the best missing mod.', 'boolean', false);
createSetting('ignoreBreedForNurseries', 'Fast Nurseries', 'This will cause nursery building to ignore breed timer settings and buy nurseries as enough resources are available.  Affects Potency as well.', 'boolean', false);
createSetting('gsForEqWs', 'GS for EQ/WS ratio', 'Minimum owned Gigastations before ratio of Best Equipment to Warpstation cost is used to buy Warpstations. Default value of 1000 essentially turns this off.', 'value', 1000);
createSetting('eqWsRatio', 'EQ/WS ratio', 'Best Equipment to Warpstation cost ratio for buying Warpstations.  Default value of 5 means no Warpstations will be bought until the Best Equipment improvement costs more than 5 times the Warpstation cost.', 'value', 5);
saveSettings();
updateValueFields();
//createSetting('Prestige', 'Prestige', 'Acquire prestiges through the selected item (inclusive) as soon as they are available in maps. Forces equip first mode. Automap must be enabled.', 'dropdown', 'Off', ['Off', 'Supershield', 'Dagadder', 'Bootboost', 'Megamace', 'Hellishmet', 'Polierarm', 'Pantastic', 'Axeidic', 'Smoldershoulder', 'Greatersword', 'Bestplate', 'Harmbalest', 'GambesOP']);



function automationMenuInit() {
    var settingBtnSrch = document.getElementsByClassName("btn btn-default");
    for (var i = 0; i < settingBtnSrch.length; i++) {
        if (settingBtnSrch[i].getAttribute("onclick") === "toggleSettingsMenu()")
            settingBtnSrch[i].setAttribute("onclick", "autoPlusSettingsMenu()");
    }
    //create the button Automation button
    var newItem = document.createElement("TD");
    newItem.appendChild(document.createTextNode("Trimpz"));
    newItem.setAttribute("class", "btn btn-default");
    newItem.setAttribute("onclick", "autoToggle()");
    var settingbarRow = document.getElementById("settingsTable").firstElementChild.firstElementChild;
    settingbarRow.insertBefore(newItem, settingbarRow.childNodes[10]);
    document.getElementById("settingsRow").innerHTML += '<div id="autoSettings" style="display: none;margin-bottom: 2vw;margin-top: 2vw;"></div>';

    //make timer click toggle paused mode
    document.getElementById('portalTimer').setAttribute('onclick', 'toggleSetting(\'pauseGame\')');
    document.getElementById('portalTimer').setAttribute('style', 'cursor: default');
}
var ranstring='';
var enteringValue = false;

    //toggles the display of the settings menu.
function autoToggle() {
    if (game.options.displayed)
        toggleSettingsMenu();
    //if (document.getElementById('graphParent').style.display === 'block')
    //        document.getElementById('graphParent').style.display = 'none';
    var item = document.getElementById('autoSettings');
    if (item.style.display === 'block')
        item.style.display = 'none';
    else item.style.display = 'block';
}

    //overloads the settings menu button to include hiding the auto menu settings.
function autoPlusSettingsMenu() {
    var item = document.getElementById('autoSettings');
    if (item.style.display === 'block')
        item.style.display = 'none';
    toggleSettingsMenu();
}

function SetTooltipForButton(btn, name, description) {
    btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\");game.global.lockTooltip = true;');
    btn.setAttribute("onmouseout", 'if(!enteringValue) game.global.lockTooltip = false; tooltip("hide")');

}

function createSetting(id, name, description, type, defaultValue, list) {
    var btnParent = document.createElement("DIV");
    btnParent.setAttribute('class', 'optionContainer');
    var btn = document.createElement("DIV");
    btn.id = id;
    if (type == 'boolean') {
        if (trimpzSettings[id] === undefined) {
            trimpzSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                value: defaultValue
            };
        }
        btn.setAttribute('class', 'settingBtn settingBtn' + trimpzSettings[id].value);
        btn.setAttribute("onclick", 'settingChanged("' + id + '")');
        SetTooltipForButton(btn, name, description);
        btn.textContent = name;
        btnParent.appendChild(btn);
        document.getElementById("autoSettings").appendChild(btnParent);
    } else if (type == 'value') {
        if (trimpzSettings[id] === undefined) {
            trimpzSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                value: defaultValue
            };
        }
        btn.setAttribute('class', 'noselect settingBtn btn-info');
        btn.setAttribute("onclick", 'autoSetValueToolTip("' + id + '", "' + name + '")');
        SetTooltipForButton(btn, name, description);
        btn.textContent = name;
        btnParent.appendChild(btn);
        document.getElementById("autoSettings").appendChild(btnParent);
    } else if (type == 'dropdown') {
        if (trimpzSettings[id] === undefined) {
            trimpzSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                value: defaultValue,
                list: list
            };
        } else { //update old setting
            if (trimpzSettings[id]["selected"]) {
                trimpzSettings[id].value = trimpzSettings[id]["selected"];
                delete trimpzSettings[id]["selected"];
        }
        }
        var btn = document.createElement("select");
        btn.id = id;
        btn.setAttribute("style", "color:#333");
        btn.setAttribute("class", "settingBtn");
        SetTooltipForButton(btn, name, description);
        btn.setAttribute("onchange", 'settingChanged("' + id + '")');

        for (var item in list) {
            var option = document.createElement("option");
            option.value = list[item];
            option.text = list[item];
            btn.appendChild(option);
        }
        btn.value = trimpzSettings[id].value;
        btnParent.appendChild(btn);
        document.getElementById("autoSettings").appendChild(btnParent);
    }
}

function settingChanged(id) {
    if (trimpzSettings[id].type == 'boolean') {
        trimpzSettings[id].value = !trimpzSettings[id].value;
        document.getElementById(id).setAttribute('class', 'settingBtn settingBtn' + trimpzSettings[id].value);
        updateCustomButtons();
    }
    if (trimpzSettings[id].type == 'dropdown') {
        trimpzSettings[id].value = document.getElementById(id).value;
    }
    saveSettings();
}


function autoSetValueToolTip(id, text) {
    enteringValue = true;
    ranstring = text;
    var elem = document.getElementById("tooltipDiv");
    var tooltipText = 'Type a number below. You can also use shorthand such as 2e5 or 200k. Put -1 for Infinite.';
    tooltipText += '<br/><br/><input id="customNumberBox" style="width: 50%" onkeypress="onKeyPressSetting(event, \'' + id + '\')" value=' + trimpzSettings[id].value + '></input>';
    var costText = '<div class="maxCenter"><div class="btn btn-info" onclick="autoSetValue(\'' + id + '\')">Apply</div><div class="btn btn-info" onclick="enteringValue = false;cancelTooltip();">Cancel</div></div>';
    game.global.lockTooltip = true;
    elem.style.left = '32.5%';
    elem.style.top = '25%';
    document.getElementById('tipTitle').textContent = 'Value Input';
    document.getElementById('tipText').innerHTML = tooltipText;
    document.getElementById('tipCost').innerHTML = costText;
    elem.style.display = 'block';
    var box = document.getElementById('customNumberBox');
    try {
        box.setSelectionRange(0, box.value.length);
    } catch (e) {
        box.select();
    }
    box.focus();
}

function onKeyPressSetting(event, id) {
    if (event.which == 13 || event.keyCode == 13) {
        autoSetValue(id);
    }
}

function autoSetValue(id) {
    var num = 0;
    unlockTooltip();
    tooltip('hide');
    var numBox = document.getElementById('customNumberBox');
    if (numBox) {
        num = numBox.value.toLowerCase();
        if (num.split('e')[1]) {
            num = num.split('e');
            num = Math.floor(parseFloat(num[0]) * (Math.pow(10, parseInt(num[1]))));
        } else {
            var letters = num.replace(/[^a-z]/gi, '');
            var base = 0;
            if (letters.length) {
                var suffices = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv', 'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt'];
                for (var x = 0; x < suffices.length; x++) {
                    if (suffices[x].toLowerCase() == letters) {
                        base = x + 1;
                        break;
                    }
                }
                if (base) num = Math.round(parseFloat(num.split(letters)[0]) * Math.pow(1000, base));
            }
            if (!base) num = parseFloat(num);
        }
    } else{
        enteringValue = false;
        return;
    }
    var txtNum = (num > -1) ? prettify(num) : 'Infinite';
    trimpzSettings[id].value = num;
    document.getElementById(id).textContent = ranstring + ': ' + txtNum;
    enteringValue = false;
    saveSettings();
}

function updateValueFields() {
    for (var setting in trimpzSettings) {
        if (trimpzSettings[setting].type == 'value') {
            var elem = document.getElementById(trimpzSettings[setting].id);
            if (elem != null) elem.textContent = trimpzSettings[setting].name + ': ' + ((trimpzSettings[setting].value > -1) ? prettify(trimpzSettings[setting].value) : 'Infinite');
        }
    }
}

function updateCustomButtons() {
    //Example updates I may need with Trimpz settings:
    
    //custom auto portal value
    //if (trimpzSettings.AutoPortal.selected == "Custom") document.getElementById("CustomAutoPortal").style.display = '';
    //else document.getElementById("CustomAutoPortal").style.display = 'none';
    //challenge for he/hr setting
    //if (trimpzSettings.AutoPortal.selected == "Helium Per Hour") document.getElementById("HeliumHourChallenge").style.display = '';
    //else document.getElementById("HeliumHourChallenge").style.display = 'none';
    //update dropdown selections
    //document.getElementById('Prestige').value = trimpzSettings.Prestige.selected;
    //document.getElementById('AutoPortal').value = trimpzSettings.AutoPortal.selected;
    //document.getElementById('HeliumHourChallenge').value = trimpzSettings.HeliumHourChallenge.selected;
}
