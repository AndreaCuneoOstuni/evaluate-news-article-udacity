async function handleSubmit(event) {
	event.preventDefault();

    // Store URL given by user:
    const formURL = document.getElementById('url').value;
    const warnUser = document.getElementById('user-warning');

    // Validate the URL
    // If true continue the process
    if( Client.validateURL(formURL)){
        // Send it to the server side
        const response = await fetch('http://localhost:8081/meanining', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: formURL}),
        })
        // Obtain response
        .then(res => {
            return res.json();
        })
        .catch((error) => {
            // Handle error
            console.log("error with promise: ", error);
        });
       console.log(response);
        if (response.status.code !== '0'){
            if (warnUser.classList.contains('hidden')) {
                warnUser.classList.remove('hidden')
            }
            document.getElementById('app-data').classList.add('hidden');
            warnUser.innerHTML = "No content to analize, please use a different URL";
        } else{
            if (!warnUser.classList.contains('hidden')) {
                warnUser.classList.add('hidden')
            }
            Client.updateUI(response);
        }
    } else {
        if (warnUser.classList.contains('hidden')) {
            warnUser.classList.remove('hidden')
        }
        document.getElementById('app-data').classList.add('hidden');
        warnUser.innerHTML = "Invalid URL, please insert a valid URL";
    }
}

export { handleSubmit }
