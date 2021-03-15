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
      '2':
        'loud need resist town soon mail buffalo inhale keep hover marine spell',
      '3':
        'shiver focus soon anchor parade lyrics prize arm sleep coil equal retreat',
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
        'section cage patient much mango task index control canal wise spare absorb',
      '2':
        'pond hazard switch erase asset green below asthma scheme tiger relief crater',
      '3':
        'borrow rate pepper castle latin among orbit soldier paddle toy road social',
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
        'dance tumble female antenna ethics pattern slab mandate zone relax liberty small',
      '4':
        'grocery orchard wife cactus tenant stumble canyon area gift choose collect arctic',
    },
  },
  {
    entropy: 'ffffffffffffffffffffffffffffffff',
    mnemonic: 'zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo wrong',
    numShares: 4,
    threshold: 3,
    knownShares: {
      '1':
        'cabbage race sight unhappy snap soda monitor valve mosquito street shallow snake',
      '2':
        'scheme interest undo emerge cricket green asset scene height section arrive raw',
      '4':
        'common reduce lecture thrive catalog cry wet gym weekend fly subway gesture',
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
        'wolf butter abuse amazing connect solid glide crush visual mystery robust wait desk repeat pizza balance plastic kitten',
      '3':
        'trumpet street brain sand clap animal cloth great number cake mosquito safe transfer protect quote poem siren vital',
      '4':
        'snow unhappy subject indicate twice erode cook enrich pig major wish evoke rabbit wing session mouse chaos boring',
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
        'alpha fix age kidney economy innocent soccer cover crawl clip acquire silver general couple diet situate brain run',
      '3':
        'expose elegant awkward artefact combine tool dish pledge method capable wash climb music tobacco auto convince advice media',
      '4':
        'stand adjust apple couch length sponsor season venue boat tide rug awkward steak shoe inch trigger picnic inch',
      '5':
        'member adult innocent minor pulp vibrant spice hundred velvet parent used concert across melody almost term party cotton',
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
        'require absurd ordinary like output false bunker enrich kingdom anger luggage dress renew crew sword battle spot digital',
      '4':
        'goat film weird rain stumble strategy camera critic seek require mad path warrior huge account ignore flee truth',
      '6':
        'volume payment turn february owner consider absurd visit today ozone world easy coast ball leisure hedgehog exercise else',
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
        'bullet correct inquiry candy place must crowd inspire echo solar direct marble clock voyage verify royal regret funny',
      '2':
        'second rice sock sugar country depth present wrist public vital engine jewel craft employ ranch noble myth crane',
      '3':
        'need miracle slow cage vicious ostrich hospital donor attitude cage evidence air female scissors legal other adult stuff',
      '4':
        'busy gossip ice useless simple fatal season brick fury rare curtain hurt survey monitor myth cave liar ill',
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
        'luxury attend rifle universe stone bitter health antenna flower element rule slogan find cupboard release imitate inmate awake sport outdoor airport royal damp clip',
      '3':
        'rug wisdom oblige orbit wash escape vocal return swing since draw person start give fancy board fish wrap depth jealous banner reason alarm breeze',
      '4':
        'sail grape giant heavy scene intact shrimp permit turkey argue truth success tail adjust keen occur dune mammal code bonus assault wedding hour vague',
      '5':
        'code defy tilt unaware aspect machine bicycle ugly worry category paper police pond decade artefact educate dirt lunch idea salad sustain during chicken rebel',
      '6':
        'retire sing stairs mesh thunder yellow ribbon hero online bacon mixed dad coconut among similar bike increase diesel radar rude ugly jacket churn crater',
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
        'toy wool pudding mechanic hole awkward strong scan scatter appear wool surround oppose never usual ahead rack transfer confirm faint viable orphan bamboo bone',
      '3':
        'situate verb glow lawsuit normal digital spend tribe few negative luxury vacant tent attract absurd rival luxury bus sample earth average odor track decrease',
      '5':
        'phrase suspect actress anger crush exotic sentence frozen snap balance resource vast lock slight potato protect public ill monkey upset poet habit because lobster',
      '7':
        'grunt morning cover dust parent recipe outer march recall bounce female pledge foil follow bar void category want bridge visa vehicle cheese worry switch',
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
        'convince cheap husband quick rabbit cash before treat diary device senior inhale museum stick junk general mansion rude breeze dad grow flock use direct',
      '2':
        'quiz result honey kitten pony resist change arctic reveal virus tooth opinion alert region theme couch train stairs describe hood tank material gadget visa',
      '3':
        'shoot debate buffalo knee fantasy truck punch siren ripple hockey all glow coral just cruise east accuse setup survey wait shine special public spy',
      '4':
        'trade foster hockey steel swing weasel elder student common size swarm blossom match warm sudden element gorilla envelope ready vast exercise win half critic',
      '6':
        'resemble nurse exhibit present patient inject chair coin manual pet bleak excite mom warrior coast angry flavor time region mean glad limit steak family',
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
        'buyer auction meat clever brain giggle nice book dolphin clap enjoy panic arena salon initial lens ball evil float lock alien ancient crumble earn',
      '4':
        'mystery talk party sick liberty boil unfair nature rough truly art prepare describe magic foot boy dismiss space hunt pumpkin salute benefit scout mix',
      '5':
        'issue magic cause farm drive carbon donate mammal airport staff token grocery job enrich oppose shield present achieve hedgehog inquiry rubber again abuse become',
      '6':
        'ordinary shy man try aspect fun annual office usual phrase crater measure shove harvest icon intact include butter salute water erosion hold bulb offer',
      '8':
        'pull version front again naive man betray mouse now armor sure inherit enforce health banana solid coin awkward fossil paper moon butter corn half',
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
        'just prefer else zoo income width yard foil grunt again digital cave',
      '4':
        'fossil tuna spawn measure next mosquito pigeon employ scorpion tenant decide like',
      '5':
        'fetch file off fortune arm where ritual coral debate supply half save',
    },
  },
  {
    entropy: 'b63a9c59a6e641f288ebc103017f1da9f8290b3da6bdef7b',
    mnemonic:
      'renew stay biology evidence goat welcome casual join adapt armor shuffle fault little machine walk stumble urge swap',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '2':
        'expand glass length eyebrow program angry discover figure opinion tunnel couch during trophy student over picnic inherit fine',
      '3':
        'leaf clarify message subway cargo height kit idea light dash adult tank strategy country horror page wrap replace',
      '4':
        'rely motor law obey print wait unaware avocado pig wrong cricket knee animal until permit sheriff ordinary pioneer',
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
        'possible plate list hover boring oblige swallow chair agree device awkward chair garage document tragic position glory right average modify force slab badge budget',
      '3':
        'fuel mesh photo cause burger left unit boat room vanish differ wisdom gather rural window mouse snap seminar average leaf double earn hub toddler',
      '4':
        'wreck brick someone common thunder rent myth choose gather cry illness topple easily taste weapon curtain flavor legal lamp around clever breeze awesome oppose',
    },
  },
  {
    entropy: '0460ef47585604c5660618db2e6a7e7f',
    mnemonic:
      'afford alter spike radar gate glance object seek swamp infant panel yellow',
    numShares: 5,
    threshold: 3,
    knownShares: {
      '1':
        'match group inch nerve dish detail column luggage permit melody stand problem',
      '4':
        'rigid doll gadget wrist hover shoe adult hover pilot obvious act exotic',
      '5':
        'crystal cancel wood survey country obtain render claim table gesture enact airport',
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
        'pioneer must mouse dish multiply price group screen disorder foot before until monitor now jewel vacuum smile measure',
      '2':
        'fall edge stick hazard sad vault screen young panda glad decade cage chicken jungle trend affair verb infant',
      '3':
        'magnet goddess two talent virtual cube need kidney always liberty chicken result math athlete decline regular deer limb',
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
        'enlist head exotic then expose company senior level wheel hybrid olympic village source purity timber useless obey exhaust enact dignity educate inflict staff obvious',
      '2':
        'consider green trouble barely attitude possible hip around pride absorb drum fold dad modify shell basic hint rotate swing valve crazy fade wide other',
      '4':
        'cousin offer rescue home mixture mean bullet remove feel stadium maximum other merge meat burst subject citizen obvious raccoon tragic dinosaur iron reject reject',
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
        'wagon honey jeans cup uphold wheat hold project romance provide miracle blind',
      '3':
        'spot wall tell office weekend steel supreme move donor chair fatigue bounce',
      '5':
        'rocket demise material wave tone ride horror focus legal zoo tortoise novel',
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
        'carry peasant expire razor federal cable nurse camera unfold veteran tortoise one very kangaroo horn barrel find galaxy',
      '3':
        'nest hire atom pool ten lesson install furnace test problem wage bone update upgrade turn problem add elite',
      '4':
        'hub fork connect faint immense disorder bitter doll skill region scatter hat collect such space apology approve gaze',
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
        'fun quarter disorder armor cricket bundle scale cement story order space banana give web life guide liar debris call fabric chicken pistol increase hood',
      '3':
        'august essence light item neck dish acid frost reveal bomb device onion trap puzzle setup theme heart street lazy moral gentle fork goat smart',
      '4':
        'diagram achieve twist float check spawn tired degree weird pole border spend gravity cupboard option describe poet diet prosper diamond have shock friend nominee',
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
        'resist slide girl emotion jungle member wheat fossil train phone exile shy',
      '2':
        'matrix valley middle super lunar metal pottery okay flower diesel album power',
      '5':
        'tree usual decline chase near pole endless next decorate ostrich tray puzzle',
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
        'same empty toy cause pilot liquid patrol host swallow hammer price erupt flame robust blush aware garment loud',
      '2':
        'leopard reason theme ginger bubble chicken banner ahead east abuse honey onion mutual avocado rule syrup across food',
      '4':
        'cycle between antique result fun quit erupt charge emotion frame trip silk easily famous across volcano tiny crawl',
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
        'jazz tobacco fall enhance great suffer resist illegal exclude play jump cradle final festival occur shop loud tower mixture bar wife list rural matrix',
      '2':
        'salon pave gesture major torch gloom dumb ice office phrase play purse tip modify poet major movie life hollow climb abandon hybrid portion lend',
      '3':
        'switch notable wear tray mouse expect blast legend summer bike salad shield prison broccoli flower prosper obtain hole kiss please solution black aisle sort',
    },
  },
];
