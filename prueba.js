console.log('andando...')

const api_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=cn7k6ppaQ4Xt7kBICgQxR8kmurlOXtXpHDd4z9NwcLp_uHWFUN28luRBTfqLbPQMFEQ3KsZF8ovVhFdStPyNIynbwfln8tCym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKMDufqXykcrEU3mSSAOYmJ3I2XD8Dx4naWrTBe4BJaRuxJCr1dXFDwLOz7B7KFlpTHWpHkvQ0x7LntRfC0-Ap2TYt4IbUj21Nz9Jw9Md8uu&lib=M5Bnl7mWASEEH-WUgb1Hrn230gk-ntj80'

async function getTemp() {
    const response = await fetch(api_url);
    const data = await response.json();    
    const dataJson = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataJson);
    const exportFileDefaultName = 'data.json';

    const linkElement = document.createElement('a');

    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    console.log(dataJson);    
}

getTemp();