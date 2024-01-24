// v.1.0.0
// /* Some code is probably from the Codepen CPC template. */

document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    let currentPage = 0;

    function showPage(pageNumber) {
			

	
	
				
        pages.forEach((page, index) => {
            if (index === pageNumber) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
			
			document.getElementById("pageId").innerHTML = pageNumber;

    }

	
	
	let colorBgStep = 0;
	
    function updateButtons() {

			if(colorBgStep == 1){
document.body.style.background = '#F5EFE6';
				colorBgStep = -1;
}else{
	document.body.style.background = '#FAF3F0';
}
colorBgStep++;

			
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 1;
			
			
    }

	
	
	
    prevButton.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            updateButtons();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            updateButtons();
        }
    });

    showPage(currentPage);
    updateButtons();
});



