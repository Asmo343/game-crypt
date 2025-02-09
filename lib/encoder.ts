//         _______ _______ ______ _   _ _______ _____ ____  _   _
//      /\|__   __|__   __|  ____| \ | |__   __|_   _/ __ \| \ | |
//     /  \  | |     | |  | |__  |  \| |  | |    | || |  | |  \| |
//    / /\ \ | |     | |  |  __| | . ` |  | |    | || |  | | . ` |
//   / ____ \| |     | |  | |____| |\  |  | |   _| || |__| | |\  |
//  /_/    \_\_|     |_|  |______|_| \_|  |_|  |_____\____/|_| \_|

// THIS CODE IS SHIT. ITS NOT SAFE. DONT USE IT FOR BIG PROTECTION SYSTEMS!!!
// I DONT TAKE RESPONSIBILITY FOR ANYTHING THAT HAPPENS WHEN YOU USE THIS CODE.
// YOU HAVE BEEN WARNED.
interface Languages {
  [key: string]: string[];
}

const languages: Languages = {
  beamng: [
    "Car",
    "Cars",
    "Crash",
    "CarCrash",
    "GameCrash",
    "NoTexture",
    "ModCrash",
    "100MPH",
    "200MPH",
    "300MPH",
    "400MPH",
    "KILOMETER",
    "Truck",
    "Gas",
    "SteeringWheel",
    "PC-Explode",
  ],
  gd: [
    "Cube",
    "Ship",
    "Ball",
    "Dual",
    "Dual-Mode",
    "Dual-Portal",
    "Portal",
    "Demon",
    "Extreme-Demon",
    "Star",
    "Like",
    "Dislike",
  ],
  fortnite: [
    "Fortnite",
    "FortniteRP",
    "BattleBus",
    "VBucks",
    "SkullTrooper",
    "ChugJug",
    "Noob",
    "Dance",
    "FN",
    "Pickaxe",
    "V-Bucks",
    "Epic",
    "Legendary",
    "GameOver",
    "Mythic",
    "Build",
  ],
  lol: [
    "GG",
    "Smurf",
    "Aram",
    "Boosted",
    "Proxy",
    "Gutted",
    "Challenjour",
    "Mid",
    "Freeze",
    "Gank",
    "Leash",
    "Ff",
    "Riot",
    "Counter",
  ],
  minecraft: [
    "Mine",
    "Craft",
    "Crafting-Table",
    "Creeper",
    "Pig",
    "Java",
    "Bedrock",
    "Command",
    "CommandBlock",
    "CraftingTable",
    "Command-Block",
    "Server",
  ],
  roblox: [
    "Roblox",
    "Robux",
    "Avatar",
    "GamePass",
    "R$",
    "Community",
    "Game",
    "Games",
    "Free-Robux",
    "Builderman",
    "Premium",
    "GiftCard",
  ],
  valorant: [
    "Ace",
    "ADS",
    "Anti-eco",
    "Cubby",
    "Aggro",
    "Anchor",
    "Bait",
    "Drop",
    "Feed",
    "Heaven",
    "Hookah",
    "Lurker",
  ],
};

/**
 * Encodes a given text using the specified language into a string.
 * The default language is 'fortnite'.
 * The text is split into individual characters, and each character is
 * converted to its corresponding ASCII code. The ASCII code is then
 * converted to a string, and each digit of the string is replaced with
 * the corresponding element of the language array.
 * The resulting strings are joined together with a space in between,
 * and finally the array of strings is joined together with a period
 * and a space in between.
 * @param text The text to encode
 * @param language The language to use for encoding
 * @returns The encoded string
 */
const encode = (text: string, language: string = "fortnite"): string => {
  if (!languages[language]) language = "fortnite";
  const output: string[] = [];
  for (const letter of text) {
    const encoded: string[] = [];
    const charCode = letter.charCodeAt(0);
    const temporary = charCode.toString().split("");
    for (const code of temporary) {
      const index = parseInt(code);
      if (index >= 0 && index < languages[language].length) {
        encoded.push(languages[language][index]);
      } else {
        // Handle invalid index
        encoded.push("?");
      }
    }
    output.push(encoded.join(" "));
  }
  return output.join(". ");
};

/**
 * Decodes a given text that was previously encoded with the encode() function.
 * The text is split into individual strings, and each string is split into
 * individual words. Each word is replaced with its corresponding ASCII code
 * digit, and the resulting string is converted back to a number using
 * parseInt. The resulting number is then converted back to a character
 * using String.fromCharCode, and the character is added to the output.
 * The output is finally joined together into a single string with no
 * spaces in between.
 * @param text The text to decode
 * @param language The language to use for decoding
 * @returns The decoded string
 */
const decode = (text: string, language: string = "fortnite"): string => {
  if (!languages[language]) language = "fortnite";
  const output: string[] = [];
  const encoded = text.split(". ");
  for (const char of encoded) {
    const codes = char.split(" ");
    let characterCode = 0;
    for (const code of codes) {
      const index = languages[language].indexOf(code);
      if (index !== -1) {
        characterCode = characterCode * 10 + index;
      } else {
        characterCode = 0;
      }
    }
    output.push(String.fromCharCode(characterCode));
  }
  return output.join("");
};

export {encode, decode};
