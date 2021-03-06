const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    // Show Betty's details when the button is clicked
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )

    // Show Nemo's details when the button is clicked
    document.querySelector("#button--nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nemo")
            theDialog.showModal()
        }
    )

    // Show Dory's details when the button is clicked
    document.querySelector("#button--dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dory")
            theDialog.showModal()
        }
    )


// Show Thanos's details when the button is clicked
    document.querySelector("#button--thanos").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--thanos")
            theDialog.showModal()
        }
    )
    // Shows Albert's details when the button is called
    document.querySelector("#button--albert").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--albert")
            theDialog.showModal()
        }
    )

    // Show Trey's details when the button is clicked
    document.querySelector("#button--trey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--trey")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--barracuda").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--barracuda")
            theDialog.showModal()
        }
    )
    
}

export default initializeDetailButtonEvents
