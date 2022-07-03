var list_of_projects = [
    { "id":"1",
        "cover": "assets/img/project-cover/uniseats-cover.jpg",
        "topic":"Software Engineering",
        "title":"Uniseats",
        "github":"https://github.com/BenedettoSimone/UniSeats",
        "paper":""
    },

    { "id":"2",
        "cover": "assets/img/project-cover/ecomobility-cover.jpg",
        "topic":"Human computer iteraction",
        "title":"Ecomobility",
        "github":"https://github.com/BenedettoSimone/eco-mobility",
        "paper":""
    },

    { "id":"3",
        "cover": "assets/img/project-cover/visual-speech-cover.jpg",
        "topic":"CONTEXT AWARE SECURITY ANALYTICS IN COMPUTER VISION",
        "title":"Visual Speech Recognition",
        "github":"https://github.com/BenedettoSimone/VisualSpeech",
        "paper":"assets/pdf/paper-casa.pdf"
    },

    { "id":"4",
        "cover": "assets/img/project-cover/edt-for-csd-cover.png",
        "topic":"Software Dependability",
        "title":"Evolutionary Decision Tree for Code Smell Detection",
        "github":"https://github.com/BenedettoSimone/EDTforCSD",
        "paper":"assets/pdf/paper-swd.pdf"
    }

];


window.onload = insert_cards();

/**
 * Create list of card
 */
function insert_cards(){

    const main_div_project = document.getElementsByClassName("wrapper-flex");

    for(let i=0; i<list_of_projects.length; i++){

        //card object
        const divCard = document.createElement("div");
        divCard.classList.add("card");

        //left card to contain image
        const leftCard = document.createElement("div");
        leftCard.classList.add("left-card");
        leftCard.style.background = "url("+list_of_projects[i].cover+")";
        leftCard.style.backgroundSize = "cover";
        leftCard.style.backgroundPositionX = "center";

        //right card to contain content
        const rightCard = document.createElement("div");
        rightCard.classList.add("right-card");

        const topic = document.createElement("h5");
        topic.classList.add("topic");
        topic.classList.add("gradient");
        topic.innerHTML = list_of_projects[i].topic;

        const title = document.createElement("h3");
        title.classList.add("title-project");
        title.innerHTML = list_of_projects[i].title;

        const externalLinks = document.createElement("div");
        externalLinks.classList.add("external-links");


        if(list_of_projects[i].github != ""){
            const git_link = document.createElement("a");
            git_link.classList.add("github");
            git_link.href = list_of_projects[i].github;
            git_link.target = "_blank";
            const git_child = document.createElement("i");
            git_child.classList.add("bx");
            git_child.classList.add("bxl-github");
            git_link.append(git_child);

            externalLinks.append(git_link);
        }

        if(list_of_projects[i].paper != ""){
            const paper_link = document.createElement("a");
            paper_link.classList.add("paper");
            paper_link.href = list_of_projects[i].paper;
            paper_link.target="_blank";
            const paper_child = document.createElement("i");
            paper_child.classList.add("bx");
            paper_child.classList.add("bxs-file-pdf");
            paper_link.append(paper_child);

            externalLinks.append(paper_link);
        }


        rightCard.append(topic);
        rightCard.append(title);
        rightCard.append(externalLinks);

        divCard.append(leftCard);
        divCard.append(rightCard);

        main_div_project[0].append(divCard);


    }
}






