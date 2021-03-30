interface TestVector {
  entropy: string;
  mnemonic: string;
  numShares: number;
  threshold: number;
  knownShares: Record<string, string>;
}

export const testVectors: TestVector[] = [
  {
    entropy: '00000000000000000000000000000000',
    mnemonic:
      'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
    numShares: 3,
    threshold: 2,
    knownShares: {
      '1':
        'market mimic toy mixed main swear impact suggest key guilt awful feed',
      '3':
        'occur nominee claw name media history myself hat mix pottery cradle wood',
    },
  },
  {
    entropy: '7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f',
    mnemonic:
      'legal winner thank year wave sausage worth useful legal winner thank yellow',
    numShares: 3,
    threshold: 3,
    knownShares: {
      '1':
        'virus avocado wage warm square net adult sheriff giggle inject adapt sword',
      '2':
        'hedgehog share twice capital core push doctor copy unique food source galaxy',
      '3':
        'thumb couple section cloth below mad salmon bounce vessel steel art laundry',
    },
  },
  {
    entropy: '80808080808080808080808080808080',
    mnemonic:
      'letter advice cage absurd amount doctor acoustic avoid letter advice cage above',
    numShares: 4,
    threshold: 2,
    knownShares: {
      '1':
        'fortune arena vague vehicle crater rhythm pony holiday please twin thought gentle',
      '4':
        'uniform define glow sell tilt photo network together brand reveal carpet mammal',
    },
  },
  {
    entropy: 'ffffffffffffffffffffffffffffffff',
    mnemonic: 'zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo wrong',
    numShares: 4,
    threshold: 3,
    knownShares: {
      '1':
        'actual dry comfort glance inmate weather trap disease car relief maximum nest',
      '2':
        'differ sort asthma accuse patient athlete image axis differ transfer entire cave',
      '4':
        'october salon fire beauty grief then broom observe original weird verify inch',
    },
  },
  {
    entropy: '000000000000000000000000000000000000000000000000',
    mnemonic:
      'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon agent',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'coast solar inspire symbol episode cactus undo team soap broken couch menu business labor beyond sand web topple',
      '3':
        'salon special almost camp capable until hybrid holiday supreme where laptop plunge rare chest amazing hood benefit hybrid',
      '4':
        'approve daughter liquid tumble carry pioneer cool foil blanket record clip require blood design search blame position issue',
    },
  },
  {
    entropy: '7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f',
    mnemonic:
      'legal winner thank year wave sausage worth useful legal winner thank year wave sausage worth useful legal will',
    numShares: 5,
    threshold: 4,
    knownShares: {
      '2':
        'humor myth boost lawn come giant orange throw plastic frame force rookie sound never negative apology okay angle',
      '3':
        'allow exact rail beauty song slam cruise habit uncle guess shoulder foster material mango much high pretty canoe',
      '4':
        'people carbon october ancient perfect rate produce deal squeeze slab cross east later couch robot tell evidence bone',
      '5':
        'wash property story addict general yellow borrow palace spot wrap update category index boy insane pond school mother',
    },
  },
  {
    entropy: '808080808080808080808080808080808080808080808080',
    mnemonic:
      'letter advice cage absurd amount doctor acoustic avoid letter advice cage absurd amount doctor acoustic avoid letter always',
    numShares: 6,
    threshold: 3,
    knownShares: {
      '1':
        'argue famous hold law goose over black science evolve barely reflect elbow top kid define vault hollow erosion',
      '4':
        'bubble beyond large age violin arrest river strike clump print essay supply cram blur air engine guide twelve',
      '6':
        'destroy swim matrix program exile rude divorce daughter warm face mosquito apology churn swift canyon prosper sun tag',
    },
  },
  {
    entropy: 'ffffffffffffffffffffffffffffffffffffffffffffffff',
    mnemonic:
      'zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo when',
    numShares: 6,
    threshold: 4,
    knownShares: {
      '1':
        'select travel medal split siren rely loop peace sunny air reduce display size shrug arrest ski junior elite',
      '2':
        'gym inhale vendor curtain cram control liquid stem general verify soup length donate shop uncle tilt filter loop',
      '3':
        'mountain donor biology velvet oyster peasant toast spell miracle chase recall round oxygen bring attend south never park',
      '4':
        'disease blind carry boss century collect ready divide awesome february profit sign yard about fever job illness chief',
    },
  },
  {
    entropy: '0000000000000000000000000000000000000000000000000000000000000000',
    mnemonic:
      'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon art',
    numShares: 6,
    threshold: 5,
    knownShares: {
      '1':
        'inform accident song eager race buzz boy define burden connect spin conduct hour name kick amount elite shoe cinnamon distance grief gravity gas confirm',
      '3':
        'dinner truly agree repeat raccoon execute rigid glow suit good ask prefer correct horror better entire yard pistol fancy crucial special short ceiling fun',
      '4':
        'elegant explain more solar ski ceiling pepper bunker tissue nuclear range bind swift melody seed ahead grief split card ship coach dragon fit floor',
      '5':
        'submit dry bubble hammer prize acoustic small limit anger practice slogan jealous gesture crack fresh raven join rough prepare hair pave verb ugly pepper',
      '6':
        'employ manual assault high face perfect chest work seed travel settle guitar bargain brick view such level budget host retire fantasy verify banana quantum',
    },
  },
  {
    entropy: '7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f',
    mnemonic:
      'legal winner thank year wave sausage worth useful legal winner thank year wave sausage worth useful legal winner thank year wave sausage worth title',
    numShares: 7,
    threshold: 4,
    knownShares: {
      '2':
        'village sure delay sentence maze light patient ginger average wrong state penalty guilt upon tiger cereal punch cable buzz runway tape ladder clock throw',
      '5':
        'copy math fetch dove chat slice purity idea domain today weather tunnel lab obey diagram rhythm panda depend apple street father gasp bundle shoe',
      '6':
        'aim gold world will lucky glare judge drill floor save rough obscure spawn maze vessel people census punch glide mercy moment fix miss power',
      '7':
        'scout still piano bubble exclude body large fine vital shift melody praise gym coast auto number apart stem much good luxury chronic wonder wood',
    },
  },
  {
    entropy: '8080808080808080808080808080808080808080808080808080808080808080',
    mnemonic:
      'letter advice cage absurd amount doctor acoustic avoid letter advice cage absurd amount doctor acoustic avoid letter advice cage absurd amount doctor acoustic bless',
    numShares: 7,
    threshold: 5,
    knownShares: {
      '1':
        'unique comic fuel draft soul slide uncover fame stadium belt wrestle potato nothing museum velvet student debate napkin luxury sustain armor any empower move',
      '2':
        'diet sport elbow setup magic long orphan screen embark viable rather marriage unhappy ramp nature unique victory prevent all bracket grab team rule motor',
      '3':
        'amount fringe peace soap mail hockey worry close game drama horror jungle second cliff entire rigid nerve digital civil habit sunset enhance bless light',
      '4':
        'when budget connect analyst join welcome hint giraffe early fan flock metal nurse enlist reward chest floor organ topic collect move tobacco hair goat',
      '6':
        'local toward neck little stage blouse melody vicious protect produce shrimp scale zoo trust hover dog spice deal noise ladder allow metal submit fetch',
    },
  },
  {
    entropy: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    mnemonic:
      'zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo vote',
    numShares: 8,
    threshold: 5,
    knownShares: {
      '3':
        'reopen shove hard squeeze improve survey hello stone boost across garden oppose pause myth stem boil section disagree apple police horse alter fancy educate',
      '4':
        'budget nature furnace process dune bargain blade onion happy bind donor used gesture barely ghost cereal couple shoe wisdom ice script satisfy mask hub',
      '5':
        'where estate blossom absurd skate ostrich quick useless front enact noise dune grain retire bright eager dutch ice distance sunny major unfair spare poet',
      '6':
        'coach collect size neither swear oblige predict night tunnel car vendor cliff business insect all trend pony barrel agree limb adjust truth enter comfort',
      '8':
        'poverty bench hat belt clap ordinary primary strike hazard issue grocery shield arena spring wet rib smoke paddle cart fade erode shift exhaust pepper',
    },
  },
  {
    entropy: '77c2b00716cec7213839159e404db50d',
    mnemonic:
      'jelly better achieve collect unaware mountain thought cargo oxygen act hood bridge',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'number swing december merry leader timber flip topic angle album million cabbage',
      '4':
        'color like salon witness illness cart valley mystery duty please faint hope',
      '5':
        'snack else margin fold toilet faculty empower fiction spirit peanut quote harbor',
    },
  },
  {
    entropy: 'b63a9c59a6e641f288ebc103017f1da9f8290b3da6bdef7b',
    mnemonic:
      'renew stay biology evidence goat welcome casual join adapt armor shuffle fault little machine walk stumble urge swap',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'shock taste include south metal lyrics never thank drum ring mansion upper token lawn clay attitude machine carry',
      '3':
        'net solid elegant hedgehog exchange title despair cover distance forget idle rather copy above hip outer rubber journey',
      '4':
        'surface tiger mesh dinosaur prepare elite gloom canyon athlete scale wage ketchup gesture front nerve into come skin',
    },
  },
  {
    entropy: '3e141609b97933b66a060dcddc71fad1d91677db872031e85f4c015c5e7e8982',
    mnemonic:
      'dignity pass list indicate nasty swamp pool script soccer toe leaf photo multiply desk host tomato cradle drill spread actor shine dismiss champion exotic',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'estate jacket oblige wage episode conduct onion milk web piece citizen deputy junior combine ill talent bid jacket toast visit guide goat dry alarm',
      '3':
        'victory undo worry arm crack slender quarter wrestle pigeon sugar language giraffe matter under electric silly crop screen crumble casino distance together duty wide',
      '4':
        'castle elephant arrive focus enhance climb lock march prosper stove diesel range useless arrest chimney farm spirit forum pen drastic again vintage blouse wool',
    },
  },
  {
    entropy: '0460ef47585604c5660618db2e6a7e7f',
    mnemonic:
      'afford alter spike radar gate glance object seek swamp infant panel yellow',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '3':
        'expose general submit dune mobile cactus spy health little confirm use glow',
      '4':
        'sure lock maple sight radio because doctor canal cute sword spend season',
      '5':
        'ranch biology deliver bus blur history pluck begin real metal fork bag',
    },
  },
  {
    entropy: '72f60ebac5dd8add8d2a25a797102c3ce21bc029c200076f',
    mnemonic:
      'indicate race push merry suffer human cruise dwarf pole review arch keep canvas theme poem divorce alter left',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'copper cousin wood lumber burst sauce panda coin police addict volume youth armed round twelve sorry later knife',
      '2':
        'vapor cover family boring range quit usual whip treat absent very cannon wear alert sausage talent friend hover',
      '3':
        'property rack absurd birth jeans leader fossil neck tree rocket around pond spirit fog victory faith chat helmet',
    },
  },
  {
    entropy: '2c85efc7f24ee4573d2b81a6ec66cee209b2dcbd09d8eddc51e0215b0b68e416',
    mnemonic:
      'clutch control vehicle tonight unusual clog visa ice plunge glimpse recipe series open hour vintage deposit universe tip job dress radar refuse motion taste',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'bread phone spoil benefit garlic receive tent bar fuel saddle loop cereal right mountain horse opera caution wife degree budget keen barrel summer door',
      '2':
        'few school derive tired profit where pen hospital cruise leaf lawsuit raise agree fetch rotate kind collect engine injury dust output ring execute humor',
      '4':
        'machine clerk faith lawsuit worry art frog consider ball sustain outer vital situate abuse math salon chair split garbage protect blood plastic blossom light',
    },
  },
  {
    entropy: 'eaebabb2383351fd31d703840b32e9e2',
    mnemonic:
      'turtle front uncle idea crush write shrug there lottery flower risk shell',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '2':
        'below pupil supply paper alcohol script fantasy trick february talk invest youth',
      '3':
        'usage hero idea comic cloud pool dentist vehicle slogan survey myself tape',
      '5':
        'snap moral remain concert tail flip opera album agent layer sentence hover',
    },
  },
  {
    entropy: '7ac45cfe7722ee6c7ba84fbc2d5bd61b45cb2fe5eb65aa78',
    mnemonic:
      'kiss carry display unusual confirm curtain upgrade antique rotate hello void custom frequent obey nut hole price segment',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '2':
        'puppy accuse foam polar board distance electric neutral resource village metal heavy coffee negative normal absent sunny maze',
      '3':
        'lava type portion world chair pride creek interest collect solve input sphere pear spring junior alpha dream lesson',
      '4':
        'broom ribbon viable month ignore post return exhaust first wheel chaos chaos action master truth decorate front crew',
    },
  },
  {
    entropy: '4fa1a8bc3e6d80ee1316050e862c1812031493212b7ec3f3bb1b08f168cabeef',
    mnemonic:
      'exile ask congress lamp submit jacket era scheme attend cousin alcohol catch course end lucky hurt sentence oven short ball bird grab wing top',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'fabric filter major cross jaguar double wagon dignity cruel super mandate harvest true sign buddy unlock body uncle fatal ugly bone link elite toward',
      '3':
        'often fault carpet know shrug bitter unfair finish foster dust toilet airport follow private usual spoon crunch future uncover runway trial clean actual trophy',
      '5':
        'believe nasty betray squirrel protect among lend salute nurse sphere stumble hawk lobster monkey sand hat clinic skin join travel donor enrich hawk struggle',
    },
  },
  {
    entropy: '18ab19a9f54a9274f03e5209a2ac8a91',
    mnemonic:
      'board flee heavy tunnel powder denial science ski answer betray cargo cat',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'chicken minute phrase report light lunch effort assist wrist ice material donate',
      '2':
        'wild fit discover dove arch donate people merit walnut corn cool table',
      '3':
        'series liquid warrior buffalo casual wrestle cause equal absurd festival machine sail',
      '4':
        'possible steak tenant verify canvas super rose immune replace they fruit dash',
    },
  },
  {
    entropy: '18a2e1d81b8ecfb2a333adcb0c17a5b9eb76cc5d05db91a4',
    mnemonic:
      'board blade invite damage undo sun mimic interest slam gaze truly inherit resist great inject rocket museum chief',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'nice outdoor genre dismiss diesel muffin express unveil about injury acid stay design math spare drift extend riot',
      '3':
        'agree volcano clerk mesh rescue cruise accident provide glue engine between poverty nature achieve tornado remain knock conduct',
      '4':
        'behind damp invest soup foam elevator media charge surprise donkey stuff dune carpet connect twenty elephant glance rapid',
    },
  },
  {
    entropy: '15da872c95a13dd738fbf50e427583ad61f18fd99f628c417a61cf8343c90419',
    mnemonic:
      'beyond stage sleep clip because twist token leaf atom beauty genius food business side grid unable middle armed observe pair crouch tonight away coconut',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'various peace author gas lumber mean spike stone special leaf surprise glass universe trip gold salt year alone fish sample mind noise risk salad',
      '2':
        'utility hammer forest despair guide sausage coin code mind cargo front addict lion elder suit aerobic mansion fury hollow travel novel fire desert fever',
      '3':
        'beef buddy panda jar vague target butter magnet false exile treat derive ill half swamp fine vote fashion permit shy cool chapter museum sick',
    },
  },
];
