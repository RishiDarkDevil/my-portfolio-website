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
        message1 : "'If you ever come to my house my mom would love your presence more than me', I used to say this. Mom loved cooking, drawing, stitching and writing poems. She was my first teacher. She took me to Karate and Drawing school, carried my bag, and brought food. Cared for me whenever I was sick. She took me to school during exams. She used to put me to sleep, comfort me and tell me bedtime stories after a tiresome day. Taught me how to be happy howsoever small my material possessions are. She loved celebrating my success more than I ever could.",
        

        sl2:2,
        name2 : "Kushi",
        designation2 : "Visiting Meghalaya", 
        image2: "assets/images/references-page/mom2.JPG",
        message2 : "My mom always tried to keep me happy and to be the best mom ever. I wish she was here with me to let her know, how much I loved her and how much she meant to me. She cared for little kids, and underprivileged people and spent all her earnings to help them. My mom was strong, she combated her illness for years to push me to become a successful man. I owe every inch of me and all I become to my Mom. I realised that it's not our achievements that make us happy, it's the smile on the faces of our loved ones. Craving for you Mom. I bow down before you in my entirety for your blessings.",  
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
