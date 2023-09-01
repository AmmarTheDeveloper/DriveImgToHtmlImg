const form = document.forms[ 0 ]
form.onsubmit = ( e ) => {
    e.preventDefault()
    const inputVal = document.querySelector( '#link' ).value
    if ( inputVal.length < 5 ) {
        alert( "Please Enter valid Link" )
        return
    }
    const convertedLink = getImgUrl( inputVal )
    const imgContainer = document.querySelector( '.img-container' )
    const imgDownloadLink = document.querySelector( '.imgDownloadLink' )
    imgDownloadLink.href = convertedLink
    imgDownloadLink.innerText = convertedLink
    let img = `<img src="${ convertedLink }" alt="Invalid Url Please Enter valid Link">`
    imgContainer.innerHTML = img
    console.log( img )
}

function getImgUrl ( url ) {
    const splittedUrl = url.split( "/" );
    // Find the index of "d" in the URL
    const indexOfD = splittedUrl.indexOf( "d" );
    // Extract the file ID from the URL
    const fileId = splittedUrl[ indexOfD + 1 ];
    const imgUrl = `https://drive.google.com/uc?export=download&id=${ fileId }`
    return imgUrl
}