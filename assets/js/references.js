/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Annapurna",
        designation1 : "Visiting Rajasthan",
        image1 : "assets/images/references-page/mom1.JPG",
        message1 : "I used to say, 'If you ever come to my house, my mother's love for your presence would far surpass mine.' My mother was truly the heart of our home, and the embodiment of love and warmth. She was a masterful cook, a gifted artist, a skilled seamstress, and a poet at heart. She was my first and most beloved teacher, guiding me through every step of my journey with a gentle hand. She took me to karate and drawing lessons, carried my school bag, and always had a warm meal waiting for me. She was my rock, always there to comfort and care for me when I was sick, and to celebrate my successes with more joy than I could ever muster. She taught me the true meaning of happiness, showing me that it is not found in material possessions, but in the love and laughter shared with loved ones.",
        

        sl2:2,
        name2 : "Kushi",
        designation2 : "Visiting Meghalaya", 
        image2: "assets/images/references-page/mom2.JPG",
        message2 : "My mother was a beacon of light in my life, always striving to keep me happy and to be the best mother she could be. Though she is no longer with me, I wish I could tell her just how deeply I loved her, and how much she meant to me. She was a selfless soul, dedicating her life to caring for little ones and those in need, and never hesitating to give of her time and resources to help others. Despite her own struggles and battles with illness, she was an unyielding pillar of strength, pushing me to become the best version of myself. I owe everything I am to her, and it is through her guidance and love that I have come to understand that true happiness is not found in our own accomplishments, but in the smile of those we hold dear. I long for you, dear mother, and I bow down in humble gratitude for all the blessings you have bestowed upon me.",  
    },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
