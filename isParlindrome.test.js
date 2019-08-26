const isParlindrome = require('./isParlindrome');
/**
 * 
 * Input constraints:
 * - Phrases or sentences are possible.
 * - Input with Space is accepted.
 * - Input with lowercase and uppercase are accepted.
 * - Input with Alphanumeric and non-alphanumeric are accepted.
 * 
 * Ref: https://en.wikipedia.org/wiki/Palindrome
 */


// Null case
test('NullTest_Invalid', () => {
    expect(isParlindrome(null)).toBe(false);
    expect(isParlindrome(undefined)).toBe(false);
});

// Length 0,1 case
test('ZeroOrOneLengthTest_Invalid', () => {
    expect(isParlindrome("")).toBe(false);
    expect(isParlindrome("a")).toBe(false);
    expect(isParlindrome("0")).toBe(false);
});


// Length even case
test('EvenLengthTest_Valid', () => {
    expect(isParlindrome("abba")).toBe(true);
    expect(isParlindrome("xyzzyx")).toBe(true);
    expect(isParlindrome("aa")).toBe(true);
});
test('EvenLengthTest_Invalid', () => {
    expect(isParlindrome("1231")).toBe(false);
    expect(isParlindrome("aabxybaa")).toBe(false);
});

// Length odd case
test('OddLengthTest_Valid', () => {
    expect(isParlindrome("abcba")).toBe(true);
    expect(isParlindrome("abcxcba")).toBe(true);
    expect(isParlindrome("amanaplanacanalpanama")).toBe(true);
});
test('OddLengthTest_Invalid', () => {
    expect(isParlindrome("abcta")).toBe(false);
    expect(isParlindrome("abcxsscba")).toBe(false);    
});

// Phrases or sentences case
test('PhrasesTest_Valid', () => {
    expect(isParlindrome("A man, a plan, a canal, Panama!")).toBe(true);
    expect(isParlindrome("A   Santa         at Nasa")).toBe(true);
     
});

// Large string case
test('LargeStringTest_Valid', () => {
    expect(isParlindrome("tility for creating palindromes from text. Load your text in the input form on the left and you'll instantly get a palindrome in the output  tuptuo eht ni emordnilap a teg yltnatsni ll'uoy dna tfel eht no mrof tupni eht ni txet ruoy daoL .txet morf semordnilap gnitaerc rof ytilit")).toBe(true);
    expect(isParlindrome("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham..mahkcaR .H yb noitalsnart 4191 eht morf snoisrev hsilgnE yb deinapmocca ,mrof lanigiro tcaxe rieht ni decudorper osla era oreciC yb 'murolaM te muronoB subiniF ed' morf 33.01.1 dna 23.01.1 snoitceS .detseretni esoht rof woleb decudorper si s0051 eht ecnis desu muspI meroL fo knuhc dradnats ehT .23.01.1 noitces ni enil a morf semoc ,'..tema tis rolod muspi meroL' ,muspI meroL fo enil tsrif ehT .ecnassianeR eht gnirud ralupop yrev ,scihte fo yroeht eht no esitaert a si koob sihT .CB 54 ni nettirw ,oreciC yb )livE dna dooG fo semertxE ehT( 'murolaM te muronoB subiniF ed' fo 33.01.1 dna 23.01.1 snoitces morf semoc muspI meroL .ecruos elbatbuodnu eht derevocsid ,erutaretil lacissalc ni drow eht fo setic eht hguorht gniog dna ,egassap muspI meroL a morf ,rutetcesnoc ,sdrow nitaL erucsbo erom eht fo eno pu dekool ,ainigriV ni egelloC yendyS-nedpmaH ta rosseforp nitaL a ,kcotnilCcM drahciR .dlo sraey 0002 revo ti gnikam ,CB 54 morf erutaretil nitaL lacissalc fo eceip a ni stoor sah tI .txet modnar ylpmis ton si muspI meroL ,feileb ralupop ot yrartnoC")).toBe(true);
});



