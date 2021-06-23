function randomOfThree(){
  return Math.floor(Math.random()* 3) + 1;
}

var firstReview = randomOfThree();
var secondReview = randomOfThree();
var thirdReview = randomOfThree();

switch(firstReview) {
  case 1: document.getElementById("first-review-title").innerHTML = "Fairmont Singapore";
    document.getElementById("first-review-place").innerHTML = "in Singapore";
    document.getElementById("first-review-body").innerHTML = '"The hotel was simple amazing and I couldn not thank Infinity more for helping out. I have been a customer for awhile and I have to say it is probably my favourite app!"';
    document.getElementById("first-review-person").innerHTML = "Malvin from Singapore";
    break;
  case 2: document.getElementById("first-review-title").innerHTML = "Klausturhof Guesthouse";
    document.getElementById("first-review-place").innerHTML = "in Iceland";
    document.getElementById("first-review-body").innerHTML = '"I could not have asked for a better stay than Klausturhof. Thanks to Infinity."';
    document.getElementById("first-review-person").innerHTML = "Vishwas from India";
    break;
  case 3: document.getElementById("first-review-title").innerHTML = "Hotel Eucalyptus";
    document.getElementById("first-review-place").innerHTML = "in Greece";
    document.getElementById("first-review-body").innerHTML = '"We booked Hotel Eucalyptus through Infinity after reading a handful of reviews, and it was easily the best decision we made for our trip to Santorini."';
    document.getElementById("first-review-person").innerHTML = "Joyce from Canada";
    break;
}

switch(secondReview) {
  case 1: document.getElementById("second-review-title").innerHTML = "Hotel F6";
    document.getElementById("second-review-place").innerHTML = "in Finland";
    document.getElementById("second-review-body").innerHTML = '"I would like to personally thank you for your outstanding service. Infinity has really made my trip unforgettable."';
    document.getElementById("second-review-person").innerHTML = "Yerzhan from Kazakhstan";
    break;
  case 2: document.getElementById("second-review-title").innerHTML = "The Ritz-Carlton";
    document.getElementById("second-review-place").innerHTML = "in Canada";
    document.getElementById("second-review-body").innerHTML = '"The best on the net! We were treated like royalty. Infinity is the real deal!"';
    document.getElementById("second-review-person").innerHTML = "Natalia from Russia";
    break;
  case 3: document.getElementById("second-review-title").innerHTML = 'Barchello Maya';
    document.getElementById("second-review-place").innerHTML = 'in Mexico';
    document.getElementById("second-review-body").innerHTML = '"Guidance from Infinity was integral to the start of my trip to Mexico and their ongoing support has been invaluable for the astonishing expirience I have received."';
    document.getElementById("second-review-person").innerHTML = "Alonzo from Italy";
    break;
}

switch(thirdReview) {
  case 1: document.getElementById("third-review-title").innerHTML = 'Lotte Hotel';
    document.getElementById("third-review-place").innerHTML = 'in South Korea';
    document.getElementById("third-review-body").innerHTML = '"This is undoubtedly the greatest site to find decent hotels. Thank you for great service!"';
    document.getElementById("third-review-person").innerHTML = "Kioko from Japan";
    break;
  case 2: document.getElementById("third-review-title").innerHTML = 'Kronon Park Hotel';
    document.getElementById("third-review-place").innerHTML = 'in Belarus';
    document.getElementById("third-review-body").innerHTML = '"Best trip planning site on the web."';
    document.getElementById("third-review-person").innerHTML = "Jurgen from Germany";
    break;
  case 3: document.getElementById("third-review-title").innerHTML = 'Kaunas Garden Apartments';
    document.getElementById("third-review-place").innerHTML = 'in Lithuania';
    document.getElementById("third-review-body").innerHTML = '"Do yourself a favor and use this handy little site if you are looking for great apartment."';
    document.getElementById("third-review-person").innerHTML = "Onni from Finland";
    break;
}
