//Variables

// Var for Classic haircut Cash
let i = 0;
let l = 490;

// Var for Classic haircut Card
let ic = 0;
let lc = 490;

// Var for Beard Cash
let x = 0;
let xb = 350;

// Var for Beard Card
let y = 0;
let yb = 350;

//Var for ClipperCut Cash
let z = 0;
let zb = 290;

//Var for ClipperCut Card
let e = 0;
let eb = 290;

//Var for ClassicCut With Beard Cash
let a = 0;
let ab = 790;

// Var for ClassicCut With Beard Card
let b = 0;
let bb = 790;

// Var for ClipperCut With Beard Cash
let c = 0;
let cb = 590;

// Var for ClipperCut With Beard Card
let d = 0;
let db = 590;

// Var for TraditionalShave Cash
let f = 0;
let fb = 390;

// Var for TraditionalShave Card
let g = 0;
let gb = 390;

// Var for allInclusive Cash
let h = 0;
let hb = 1190;

// Var for allInclusive Card
let k = 0;
let kb = 1190;


// ----------- THIS IS THE FUNCTIONS SECTION -----------

//Function for classic Haircut Cash
const classicHaircut = function () {
  const clscut = (document.getElementById('classicHaircut').value = ++i);
  document.getElementById('classicHaircut').innerHTML = clscut;
  if (document.getElementById('clscutPrice').innerHTML === '') {
    document.getElementById('clscutPrice').innerHTML = 490;
  } else {
    document.getElementById('clscutPrice').innerHTML = l += 490;
  }
};

//Function for Classic Haircut Card
const classicHaircutCard = function () {
  const clscutCard = (document.getElementById('classicHaircutCard').value =
    ++ic);
  document.getElementById('classicHaircutCard').innerHTML = clscutCard;
  if (document.getElementById('clscutPriceCard').innerHTML === '') {
    document.getElementById('clscutPriceCard').innerHTML = 490;
  } else {
    document.getElementById('clscutPriceCard').innerHTML = lc += 490;
  }
};

//Function for Beard Cash
const beardCash = function () {
  const brdCash = (document.getElementById('beardCash').value = ++x);
  document.getElementById('beardCash').innerHTML = brdCash;
  if (document.getElementById('brdCashPriceCash').innerHTML === '') {
    document.getElementById('brdCashPriceCash').innerHTML = 350;
  } else {
    document.getElementById('brdCashPriceCash').innerHTML = xb += 350;
  }
};

//Function for Beard Card
const beardCard = function () {
  const brdCard = (document.getElementById('beardCard').value = ++y);
  document.getElementById('beardCard').innerHTML = brdCard;
  if (document.getElementById('brdCardPrice').innerHTML === '') {
    document.getElementById('brdCardPrice').innerHTML = 350;
  } else {
    document.getElementById('brdCardPrice').innerHTML = yb += 350;
  }
};

//Function for ClipperCut Cash
const clipperCutCash = function () {
  const clpCutCash = (document.getElementById('clipperCutCash').value = ++z);
  document.getElementById('clipperCutCash').innerHTML = clpCutCash;
  if (document.getElementById('clpCutCash').innerHTML === '') {
    document.getElementById('clpCutCash').innerHTML = 290;
  } else {
    document.getElementById('clpCutCash').innerHTML = zb += 290;
  }
};

//Function for ClipperCut Card
const clipperCutCard = function () {
  const clpCutCard = (document.getElementById('clipperCutCard').value = ++e);
  document.getElementById('clipperCutCard').innerHTML = clpCutCard;
  if (document.getElementById('clpCutCard').innerHTML === '') {
    document.getElementById('clpCutCard').innerHTML = 290;
  } else {
    document.getElementById('clpCutCard').innerHTML = eb += 290;
  }
};

//Funtion for ClassicCut With Beard Cash
const classicCutBeardCash = function () {
  const clsCutBrdCaSh = (document.getElementById('classicCutBeardCash').value =
    ++a);
  document.getElementById('classicCutBeardCash').innerHTML = clsCutBrdCaSh;
  if (document.getElementById('clsCutBrdCashPrice').innerHTML === '') {
    document.getElementById('clsCutBrdCashPrice').innerHTML = 790;
  } else {
    document.getElementById('clsCutBrdCashPrice').innerHTML = ab += 790;
  }
};

//Funtion for ClassicCut With Beard Card
const classicCutBeardCard = function () {
  const clsCutBrdCard = (document.getElementById('classicCutBeardCard').value =
    ++b);
  document.getElementById('classicCutBeardCard').innerHTML = clsCutBrdCard;
  if (document.getElementById('clsCutBrdCardPrice').innerHTML === '') {
    document.getElementById('clsCutBrdCardPrice').innerHTML = 790;
  } else {
    document.getElementById('clsCutBrdCardPrice').innerHTML = bb += 790;
  }
};

//Funtion for ClipperCut With Beard Cash
const clipperCutBeardCash = function () {
  const clpCutBrdCash = (document.getElementById('clipperCutBeardCash').value =
    ++c);
  document.getElementById('clipperCutBeardCash').innerHTML = clpCutBrdCash;
  if (document.getElementById('clpCutBrdCashPrice').innerHTML === '') {
    document.getElementById('clpCutBrdCashPrice').innerHTML = 590;
  } else {
    document.getElementById('clpCutBrdCashPrice').innerHTML = cb += 590;
  }
};

//Funtion for ClipperCut With Beard Card
const clipperCutBeardCard = function () {
  const clpCutBrdCard = (document.getElementById('clipperCutBeardCard').value =
    ++d);
  document.getElementById('clipperCutBeardCard').innerHTML = clpCutBrdCard;
  if (document.getElementById('clpCutBrdCardPrice').innerHTML === '') {
    document.getElementById('clpCutBrdCardPrice').innerHTML = 590;
  } else {
    document.getElementById('clpCutBrdCardPrice').innerHTML = db += 590;
  }
};

//Function for TraditionalShave cash
const traditionalShavecash = function () {
  const trdShaveCash = (document.getElementById('traditionalShaveCash').value =
    ++f);
  document.getElementById('traditionalShaveCash').innerHTML = trdShaveCash;
  if (document.getElementById('trdShaveCashPrice').innerHTML === '') {
    document.getElementById('trdShaveCashPrice').innerHTML = 390;
  } else {
    document.getElementById('trdShaveCashPrice').innerHTML = fb += 390;
  }
};

//Function for TraditionalShave card
const traditionalShavecard = function () {
  const trdShaveCard = (document.getElementById('traditionalShaveCard').value =
    ++g);
  document.getElementById('traditionalShaveCard').innerHTML = trdShaveCard;
  if (document.getElementById('trdShaveCardPrice').innerHTML === '') {
    document.getElementById('trdShaveCardPrice').innerHTML = 390;
  } else {
    document.getElementById('trdShaveCardPrice').innerHTML = gb += 390;
  }
};

//Function for allInclusive Cash
const allInclusiveCash = function () {
  const allInclvCash = (document.getElementById('allInclusiveCash').value =
    ++h);
  document.getElementById('allInclusiveCash').innerHTML = allInclvCash;
  if (document.getElementById('allInclvCashPrice').innerHTML === '') {
    document.getElementById('allInclvCashPrice').innerHTML = 1190;
  } else {
    document.getElementById('allInclvCashPrice').innerHTML = hb += 1190;
  }
};

//Function for allInclusive Card
const allInclusiveCard = function () {
  const allInclvCard = (document.getElementById('allInclusiveCard').value =
    ++k);
  document.getElementById('allInclusiveCard').innerHTML = allInclvCard;
  if (document.getElementById('allInclvCardPrice').innerHTML === '') {
    document.getElementById('allInclvCardPrice').innerHTML = 1190;
  } else {
    document.getElementById('allInclvCardPrice').innerHTML = kb += 1190;
  }
};

//Total inCash
const totalCash = function () {
  const servise1 = Number(document.getElementById('clscutPrice').innerHTML);
  const servise2 = Number(
    document.getElementById('brdCashPriceCash').innerHTML
  );
  const servise3 = Number(document.getElementById('clpCutCash').innerHTML);
  const servise4 = Number(
    document.getElementById('clsCutBrdCashPrice').innerHTML
  );
  const servise5 = Number(
    document.getElementById('clpCutBrdCashPrice').innerHTML
  );
  const servise6 = Number(
    document.getElementById('trdShaveCashPrice').innerHTML
  );
  const servise7 = Number(
    document.getElementById('allInclvCashPrice').innerHTML
  );

  const array1 = [
    servise1,
    servise2,
    servise3,
    servise4,
    servise5,
    servise6,
    servise7,
  ];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;


 const ttlcsh = array1.reduce(reducer);
 document.getElementById('totalCash').innerHTML = `${ttlcsh} Kč`;

 return ttlcsh;

};

//Total in Card
const totalCard = function () {
  const servise1 = Number(document.getElementById('clscutPriceCard').innerHTML);
  const servise2 = Number(document.getElementById('brdCardPrice').innerHTML);
  const servise3 = Number(document.getElementById('clpCutCard').innerHTML);
  const servise4 = Number(
    document.getElementById('clsCutBrdCardPrice').innerHTML
  );
  const servise5 = Number(
    document.getElementById('clpCutBrdCardPrice').innerHTML
  );
  const servise6 = Number(
    document.getElementById('trdShaveCardPrice').innerHTML
  );
  const servise7 = Number(
    document.getElementById('allInclvCardPrice').innerHTML
  );

  const array1 = [
    servise1,
    servise2,
    servise3,
    servise4,
    servise5,
    servise6,
    servise7,
  ];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  
  const ttlcrd = array1.reduce(reducer);

  document.getElementById('totalCard').innerHTML = `${ttlcrd} Kč`;

  return ttlcrd;

};

//Total Card + Total Cash
const totalCardCash = function (a, b) {
  a = totalCash();
  b = totalCard();
    const ab = a+b;
  document.getElementById("totalCardCash").innerHTML = ab + " Kč";
};
