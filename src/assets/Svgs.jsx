export const SocleScreen = () => {
    return (
        <svg id="socle-screen" xmlns="http://www.w3.org/2000/svg" viewBox="470 540 610 190" >
            <g transform="matrix(1 0 0 1 -0.5 -0.349964)">
                <path d="M524.359508,538C523.266533,539.912705,466.079393,698.424002,480.747097,697.798579C495.414801,697.173156,1066.949211,697.798579,1066.949211,697.798579C1076.688441,696.251065,1014.357774,539.999999,1014.357774,539.999999" transform="matrix(1 0 0 1 0.000001 0.000001)" fill="rgb(197,213,215)" stroke="none" strokeWidth="3.08" />
                <path d="M479.844056,697.79858L476.977082,711.533358L1076.266147,711.183418L1068.043103,697.79858" transform="matrix(1 0 0 1 -1.621614 -6.867389)" fill="rgb(197,213,215)" stroke="none" strokeWidth="3.08" />
                <path d="M516.089999,711.533358L524.359509,728.365535L1014.357775,726.640521L1021.506195,711.183416" transform="matrix(1 0 0 1 -0.049421 -8.241114)" fill="rgb(197,213,215)" stroke="none" strokeWidth="3.08" />
                <g transform="matrix(1 0 0 1 0.000001 0)">
                    <path d="M515.991156,711.533361L519.59625,718.56965L1014.357774,719.774483L1021.506194,711.533361L515.991156,711.533361Z" transform="matrix(0.994854 0 0 1.084933 2.655621 -67.650024)" fill="rgb(111,120,121)" stroke="none" strokeWidth="3.08" />
                    <path d="M1016.020434,713.257062L1011.387849,713.257062L1018.438915,704.315997L1020.073944,704.315996L1016.020434,713.257062Z" transform="matrix(1 0 0 1 0.000003 0.000001)" fill="rgb(111,120,121)" stroke="none" strokeWidth="3.08" />
                </g>
                <path d="M523.859509,539.650028L515.540578,559.181746L1020.956771,559.181746L1013.808352,539.650028" transform="matrix(1 0 0 1 0.000003 0)" fill="rgb(111,120,121)" stroke="none" strokeWidth="3.08" />
                <rect width="95" height="55" rx="0" ry="0" transform="matrix(1 0 0 1 722 539)" fill="rgb(197,213,215)" stroke="none" strokeWidth="1" />
                <polygon points="816,538 840,565.5 816,615" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />
                <polygon points="723,538 699,565.5 723,615" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />

                <rect width="95" height="23" rx="3" ry="3" transform="matrix(1 0 0 1 722 593)" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />
            </g>
            <g>
                <rect width="1175" height="452" rx="0" ry="0" transform="matrix(1 0 0 1 187 37.5)" fill="rgb(0,0,0)" stroke="none" strokeWidth="1" />
            </g>
        </svg>
    )
}

export const SwitchSvg = ({ switchSvg, SwitchPc }) => {
    return (
        <svg id="switch-svg" xmlns="http://www.w3.org/2000/svg">
            <rect id="switch-screen" width="50" height="35" rx="17.5" ry="17.5" x="0" y={switchSvg} onClick={SwitchPc} fill="rgb(197,213,215)" stroke="none" strokeWidth="1">
                <animate id="anim1" attributeName="fill" from="rgb(197,213,215)" to="red" dur="500ms" begin="indefinite" />
                <animate id="anim2" attributeName="fill" from="red" to="rgb(197,213,215)" dur="500ms" begin="anim1.end" />
                <animate id="anim3" attributeName="fill" from="rgb(197,213,215)" to="red" dur="500ms" begin="anim2.end" />
                <animate id="anim4" attributeName="fill" from="red" to="rgb(197,213,215)" dur="500ms" begin="anim3.end" />
                <animate id="anim5" attributeName="fill" from="rgb(197,213,215)" to="red" dur="500ms" begin="anim4.end" />
                <animate id="anim6" attributeName="fill" from="red" to="rgb(197,213,215)" dur="500ms" begin="anim5.end" />
            </rect>
        </svg>
    )
}

export const Linkedin = (fill, stroke) => {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path stroke={stroke} fill={fill} d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
    )
}

export const Instagram = (stroke, fill) => {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" class="svg-inline--fa fa-instagram-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path stroke={stroke} fill={fill} strokeWidth={15} d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
        </svg>
    )
}

export const Twitter = (stroke, fill) => {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill={fill} stroke={stroke} d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
    )
}

export const PrevTwitter = () => {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="rgb(29, 155, 240)" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
    )
}