Thaana package currently converts latin to unicode. This package is sort of a port of [thaana_conversions_php by Jawish](https://github.com/jawish/thaana_conversions_php) in **Javascript**
Currently it only converts the latin used with fonts like A_Faseyha in the olden days. 

## TODO
The following methods will be added (maybe renamed).

- **convertUtf8ToUnicodeIntegers()** Convert UTF-8 data to Unicode character integer representations
- **convertUtf8ToAscii()** Convert UTF-8 data to Ascii
- **convertUtf8ToEntities()** Convert UTF-8 data to HTML entities
- **convertEntitiesToUnicodeIntegers()** Convert HTML Unicode entitied string to Unicode Integer characters array
- **convertEntitiesToUtf8 C**onvert HTML Unicode entities to UTF-8
- **convertEntitiesToAscii()** Convert HTML Unicode entities to Dhivehi Ascii equivalents
- **convertUnicodeIntegersToUtf8()** Convert Unicode Integer array to UTF
- **convertUnicodeIntegersToEntities()** Convert Unicode char integers to HTML entities
- **convertUnicodeIntegersToAscii()** Convert Unicode char integers to Ascii
- **convertAsciiToUtf8()** Convert Ascii Thaana to UTf-8
- **convertAsciiToEntities()** Convert Ascii Thaana to Unicode HTML entities
- **convertAsciiToUnicodeIntegers()** Convert Ascii Thaana to an array of Unicode integers
- **convertLatinToAscii()** Converts Dhivehi written in Latin to Thaana in . Use with the convertAsciiTo* functions to convert to Thaana script formats.
- **convertAsciiToLatin()** Converts Dhivehi written in Ascii representation to Latinized Dhivehi.


## Usage
```javascript

// Load the class
const Thaana = require('./index')

// Create an instance
thaana = new Thaana();

// Example: Converting latin to equivalent unicode
console.log(thaana.toUnicode('udwmcawHum'))

```