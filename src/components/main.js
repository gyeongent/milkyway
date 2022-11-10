//Node Import
import React, { useState } from "react";
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

//Media Import (Images & Videos)
import appstore_kr from "../media/App_Store_Badge_KR.svg";
import appstore_en from "../media/App_Store_Badge_US-UK.svg";
import playstore_kr from "../media/google-play-badge_kr.png";
import playstore_en from "../media/google-play-badge.png"
import Earth from "../media/earthmap.svg";
import Compass from "../compass.svg";
import MainVideo from "../media/videoplayback.mp4";
import NoImg from "../media/noimage.png";
import MapImg from "../media/map.png";

//Guide Import
// import guideOne from "../media/guide/1.png";

//Data Import
import {
    download,
    installGuide,
    guideLang,
    wantLang,
    downTitle,
    googleDrive,
    GuideKR,
    GuideEN
} from "../data/data.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function VideoSection(props){
    return(
        <div>
            <div className="main_video">
                <video loop autoPlay muted>
                    <source
                        src={MainVideo}
                        type="video/mp4"
                    />
                    현재 실행중인 브라우저에서는 비디오 태그가 지원되지 않습니다.
                    브라우저를 업데이트 해주세요.
                </video>
                <div className="main_screen_info">
                    <div className="main_video_title">
                        Milky Way Project
                    </div>
                    <div className="interaction_btn">
                        <a href="#download">
                            <div>
                                <InstallDesktopIcon /> {props.downBtn}
                            </div>
                        </a>
                        <a href="#guide">
                            <div>
                                <LibraryBooksIcon /> {props.guideBtn}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MapSection(props){

    const mapDetail = document.getElementsByClassName("MapDetail");

    function ShowModal(){
        mapDetail[0].style.display = "block";
        document.body.classList.add("openModal")
    }

    return(
        <div className="worldMap" onClick={ShowModal}>
            <img src={MapImg} alt="World Map"/>
            <div className="worldMap_after">
                {props.morezone}
            </div>
        </div>
    );
}

function MapDetailCompo(){
    return(
        <div className="ModalAll">
            <div className="MapDetail_ImgSection">
                <img src={NoImg} alt="Map" />
            </div>
            <div>
                <div className="MapDetail_Title">
                    맵 섹션 1
                </div>
                <div className="MapDetail_Desc">
                    설명
                </div>
            </div>
        </div>
        
    );
}

function MapDetail(){

    const mapDetail = document.getElementsByClassName("MapDetail");

    function closeFn(){
        mapDetail[0].style.display = "none";
        document.body.classList.remove("openModal")
    }

    return(
        <div className="MapDetail">
            <div className="MapDetail_content">
                <div className="closeBtn" onClick={closeFn}>
                    <CloseIcon sx={{
                        margin: "0px",
                        fontSize: "50px",
                    }}/>
                </div>
                <div className="MapDetail_Text">
                    <MapDetailCompo />
                    <MapDetailCompo />
                </div>
            </div>
        </div>
    );
}

function GuideSection(props){
    return(
        <div className="guideSection" id="guide">
            <div className="guideLang">
                {props.guideLang}
            </div>
            <div className="guideDesc">
                <GuideCompo
                    guideImg={NoImg}
                    guideDetail={props.guideDetail_Download}
                />
                <GuideCompo
                    guideImg={NoImg}
                    guideDetail={props.guideDetail_Download}
                />
                <GuideCompo
                    guideImg={NoImg}
                    guideDetail={props.guideDetail_Download}
                />
            </div>
        </div>
    );
}

function GuideCompo(props){
    return(
        <>
            <div className="guideDetail">
                <div className="guideDetail_window">
                    <img src={props.guideImg} alt="" />
                </div>
                <div className="guideDetail_content">
                    {props.guideDetail}
                </div>
            </div>
            <hr className="guide_hr"/>
        </>
    )
}

function DownInfoCompo(props){
    return(
        <div>
            <div className="downInfo">
                <div style={{fontWeight: 700, fontSize: "17px"}}>
                    {props.googleDrive}
                </div>
                <div />
                <div>
                    v. {props.version}
                </div>
                <div className="downBtn" onClick={()=>{alert("In ready.\n준비중입니다.")}}>
                    <DownloadIcon />{props.download}
                </div>
            </div>
            <div style={{color: "gray", fontWeight: 300, marginTop:"-5px"}}>
                {props.server}
            </div>
            <hr className="small_hr"/>
        </div>
    );
}

function DownloadSection(props){
    return(
        <div className="downSection" id="download">
            <hr />
            <div className="guideLang">
                {props.downTitle}
                <div className="info">
                    <InfoIcon sx={{fontSize:"15px"}}/>
                    {props.downInfo}
                </div>
            </div>
            <div className="kindDown">
                <div className="kindDesktop">
                <DownInfoCompo 
                        googleDrive={"CDN Download Link"}
                        version={"DEV"}
                        download={props.download}
                        server={props.server}
                    />
                    <DownInfoCompo 
                        googleDrive={props.googleDrive + " 1"}
                        version={"DEV"}
                        download={props.download}
                        server={props.server}
                    />
                    <DownInfoCompo 
                        googleDrive={props.googleDrive + " 2"}
                        version={"DEV"}
                        download={props.download}
                        server={props.server}
                    />
                </div>
                <div className="kindMobile">
                    <div>
                        <img src={props.appstore} alt="Download On App Store"/>
                    </div>
                    <div>
                        <img src={props.playstore} alt="Download On Google Play"/>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

function Main(){

    const [lang, setLang] = useState("en");

    const b2t = document.getElementsByClassName("b2t");

    function BackToTop(){
        window.scrollTo(0,0);
    }

    document.addEventListener("scroll", function(){
        if(window.scrollY > 1200 && document.body.clientWidth >= 768){
            b2t[0].style.opacity = 1;
        } else {
            b2t[0].style.opacity = 0;
        }
    })

    return(
        <div>
            <VideoSection 
                downBtn={lang === "en" ? download[0] : download[1]}
                guideBtn={lang === "en" ? installGuide[0] : installGuide[1]}
            />
            <div className="lang_select">
                {lang === "en" ? (
                    <div>
                        <b>{wantLang[1]}</b><br />
                        <div onClick={() => {setLang("kr")}}>
                            <span class="fi fi-kr"/>
                            &nbsp;한국어
                        </div>
                    </div>
                ) : (
                    <div>
                        <b>{wantLang[0]}</b><br />
                        <div onClick={() => {setLang("en")}}>
                            <img src={Earth} alt="International" style={{width: "25px", backgroundColor: "rgb(50,50,50)"}}/>
                            &nbsp;English
                        </div>
                    </div>
                )}
            </div>
            <MapSection 
                morezone={lang === "en" ? "View more by zone" : "구역별 자세히 보기"}
            />
            <MapDetail />
            <DownloadSection 
                downTitle={lang === "en" ? downTitle[0] : downTitle[1]}
                downInfo={lang === "en" ? "Please download only one link." : "한 개의 링크만 다운로드해 주세요."}
                googleDrive={lang === "en" ? googleDrive[0] : googleDrive[1]}
                appstore={lang === "en" ? appstore_en : appstore_kr}
                playstore={lang === "en" ? playstore_en : playstore_kr}
                download={lang === "en" ? "Download" : "다운로드"}
                server={lang === "en" ? "Seoul, South Korea" : "서울, 대한민국"}
            />
            <GuideSection 
                guideLang={lang === "en" ? guideLang[0] : guideLang[1]}
                guideDetail_Download={lang === "en" ? GuideEN[0] : GuideKR[0]}
            />
            <div className="b2t" onClick={BackToTop}>
                <img src={Compass} alt="Back to top"/>
            </div>
        </div>
    );
}

export default Main;