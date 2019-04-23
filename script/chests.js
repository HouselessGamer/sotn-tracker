function generalCanGetChest(chestlist) {
    var canGet = 0;
    var unopened = 0;
    for (var key in chestlist) {
        if (chestlist.hasOwnProperty(key)) {
            if (!chestlist[key].isOpened) {
                unopened++;
            }

            if (!chestlist[key].isOpened && chestlist[key].isAvailable()) {
                canGet++;
            }
        }
    }

    if (unopened == 0) {
        return "opened";
    }
    if (canGet == unopened) {
        return "available";
    }
    if (canGet == 0) {
        return "unavailable";
    }
    return "possible";
}

//define overworld chests
var chests = [
    {
        name: "Power Of Wolf",
        x: "02.6%",
        y: "70.5%",
        map: 1,
        isAvailable: function() {
            if ((items.SoulOfBat) || 
                (items.LeapStone && items.GravityBoots) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Merman Statue",
        x: "10.6%",
        y: "79.5%",
        map: 1,
        isAvailable: function() {
            if (items.JewelOfOpen) {
                return "available";
            }
            return "unavailable";
        },
    },    
    {
        name: "Cube Of Zoe",
        x: "27.8%",
        y: "68.2%",
        map: 1,
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Skill Of Wolf",
        x: "22.0%",
        y: "61.2%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Bat Card",
        x: "18.4%",
        y: "49.0%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Spirit Orb",
        x: "38.4%",
        y: "57.0%",
        map: 1,
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Form Of Mist",
        x: "31.6%",
        y: "39.5%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots) || 
                (items.SoulOfBat) ||
                (items.LeapStone) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Sword Card",
        x: "30.4%",
        y: "31.5%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots && items.LeapStone) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Echo Of Bat",
        x: "24.4%",
        y: "27.4%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots && items.LeapStone && items.FormOfMist) || 
                (items.GravityBoots && items.LeapStone && items.SoulOfWolf) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gravity Boots",
        x: "52.4%",
        y: "41.2%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots && items.LeapStone) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Leap Stone",
        x: "48.0%",
        y: "17.0%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots) || 
                (items.LeapStone) ||
                (items.JewelOfOpen) ||
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Power Of Mist",
        x: "48.0%",
        y: "13.0%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots && items.LeapStone) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Ghost Card",
        x: "60.4%",
        y: "8.5%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots && items.LeapStone) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Fire Of Bat",
        x: "92.0%",
        y: "16.8%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots && items.LeapStone) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Soul of Bat",
        x: "73.6%",
        y: "37.4%",
        map: 1,
        isAvailable: function() {
            if ((items.FormOfMist && items.GravityBoots) || 
                (items.FormOfMist && items.LeapStone) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Faerie Card",
        x: "81.0%",
        y: "31.0%",
        map: 1,
        isAvailable: function() {
            if ((items.GravityBoots) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Jewel Of Open",
        x: "77.0%",
        y: "35.6%",
        map: 1,
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Faerie Scroll",
        x: "91.0%",
        y: "31.0%",
        map: 1,
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Soul Of Wolf",
        x: "95.6%",
        y: "31.5%",
        map: 1,
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Holy Symbol",
        x: "85.2%",
        y: "78.2%",
        map: 1,
        isAvailable: function() {
            if (items.JewelOfOpen && items.MermanStatue) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Demon Card",
        x: "43.2%",
        y: "83.6%",
        map: 1,
        isAvailable: function() {
            if ((items.JewelOfOpen && items.SoulOfBat) || 
                (items.JewelOfOpen && items.LeapStone) ||
                (items.JewelOfOpen && items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },

    {
        name: "Gas Cloud",
        x: "73.8%",
        y: "04.6%",
        map: 2,
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Force Of Echo",
        x: "13.8%",
        y: "22.0%",
        map: 2,
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Eye Of Vlad",
        x: "54.8%",
        y: "24.5%",
        map: 2,
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Tooth Of Vlad",
        x: "09.6%",
        y: "58.5%",
        map: 2,
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Ring Of Vlad",
        x: "36.8%",
        y: "84.8%",
        map: 2,
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Heart Of Vlad",
        x: "63.4%",
        y: "78.8%",
        map: 2,
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Rib Of Vlad",
        x: "69.8%",
        y: "71.8%",
        map: 2,
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
]

