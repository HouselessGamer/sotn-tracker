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
        x: "01.3%",
        y: "70.5%",
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
        x: "05.3%",
        y: "79.5%",
        isAvailable: function() {
            if (items.JewelOfOpen) {
                return "available";
            }
            return "unavailable";
        },
    },    
    {
        name: "Cube Of Zoe",
        x: "13.9%",
        y: "68.2%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Skill Of Wolf",
        x: "11.0%",
        y: "61.2%",
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
        x: "9.2%",
        y: "49.0%",
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
        x: "19.2%",
        y: "57.0%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Form Of Mist",
        x: "15.8%",
        y: "39.5%",
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
        x: "15.2%",
        y: "31.5%",
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
        x: "12.2%",
        y: "27.4%",
        isAvailable: function() {
            if ((items.GravityBoots && items.LeapStone && items.FormOfMist) || 
                (items.GravityBoots && items.LeapStone && items.FromOfWolf) || 
                (items.SoulOfBat) ||
                (items.FormOfMist && items.PowerOfMist)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gravity Boots",
        x: "26.2%",
        y: "41.2%",
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
        x: "24.0%",
        y: "17.0%",
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
        x: "24.0%",
        y: "13.0%",
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
        x: "30.2%",
        y: "8.5%",
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
        x: "46.0%",
        y: "16.8%",
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
        x: "36.8%",
        y: "37.4%",
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
        x: "40.5%",
        y: "31.0%",
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
        x: "38.5%",
        y: "35.6%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Faerie Scroll",
        x: "45.5%",
        y: "31.0%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Soul Of Wolf",
        x: "47.8%",
        y: "31.5%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Holy Symbol",
        x: "42.6%",
        y: "78.2%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.MermanStatue) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Demon Card",
        x: "21.6%",
        y: "83.6%",
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
        x: "86.9%",
        y: "04.6%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Force Of Echo",
        x: "56.9%",
        y: "22.0%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Eye Of Vlad",
        x: "77.4%",
        y: "24.5%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Tooth Of Vlad",
        x: "54.8%",
        y: "58.5%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Ring Of Vlad",
        x: "68.4%",
        y: "84.8%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Heart Of Vlad",
        x: "81.7%",
        y: "78.8%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Rib Of Vlad",
        x: "84.9%",
        y: "71.8%",
        isAvailable: function() {
            if (items.JewelOfOpen && items.SoulOfBat && items.FormOfMist && items.EchoOfBat) {
                return "available";
            }
            return "unavailable";
        },
    },




]

