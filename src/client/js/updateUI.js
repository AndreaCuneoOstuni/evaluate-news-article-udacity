function updateUI(data){
    document.getElementById('app-data').classList.remove('hidden');
    document.getElementById('agreement').innerHTML = data.agreement.toLowerCase();
    document.getElementById('confidence').innerHTML = data.confidence + "%";
    document.getElementById('irony').innerHTML = data.irony.toLowerCase();
    document.getElementById('score').innerHTML = Client.addPolarityValue(data.score_tag);
    document.getElementById('subjectivity').innerHTML = data.subjectivity.toLowerCase();
}

export { updateUI }