import calcScroll from "./remove-croll-jump";


const popupImages = () => {
    const workSection = document.querySelector('.works');
    const imgPopup = document.createElement('div');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImage);


    imgPopup.style.alignItems = 'center';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.display = 'none';
    imgPopup.classList.add('fadeIn');
    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.classList.add('modal-open');
            document.body.style.marginRight = `${calcScroll()}px`;
        }
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.classList.remove('modal-open');
            imgPopup.classList.add('fadeOutDown');
            imgPopup.classList.remove('fadeIn');
            document.body.style.marginRight = `0px`;
        }
    });
};
export default popupImages;