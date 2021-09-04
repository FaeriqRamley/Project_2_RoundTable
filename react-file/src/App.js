import React, {useState} from "react";
import ShowIP from "./components/ShowIP";
import ShowNewsData from "./components/ShowNewsData";
import ShowCounter from "./components/ShowCounter";

function App() {
  const [userIP,setUserIP] = useState(
    {"ip_address":"",
    "city":"",
    "city_geoname_id":0,
    "region":null,
    "region_iso_code":null,
    "region_geoname_id":null,
    "postal_code":"",
    "country":"",
    "country_code":"",
    "country_geoname_id":0,
    "country_is_eu":false,
    "continent":"",
    "continent_code":"",
    "continent_geoname_id":0,
    "longitude":0,
    "latitude":0,
    "security":{"is_vpn":false},
    "timezone":{
      "name":"",
      "abbreviation":"",
      "gmt_offset":0,
      "current_time":"",
      "is_dst":false
    },
    "flag":{
      "emoji":"",
      "unicode":"",
      "png":"",
      "svg":""
    },
      "currency":{
        "currency_name":"",
        "currency_code":""
      },
      "connection":{
        "autonomous_system_number":0,
        "autonomous_system_organization":"",
        "connection_type":"",
        "isp_name":"",
        "organization_name":""
      }
    }
  );
  const geoApiKey = "cb69a240275841eaa61cc32b842c7924";
  // const [newsData,setNewsData] = useState({
  //   "pagination": {
  //       "limit": 3,
  //       "offset": 0,
  //       "count": 3,
  //       "total": 4924
  //   },
  //   "data": [
  //       {
  //           "author": "dpa",
  //           "title": "Tennis: Tennis: Aus für Kohlschreiber und Koepfer am Rothenbaum",
  //           "description": "Nach dem Achtelfinale ist kein deutscher Tennisspieler mehr beim ATP-Turnier am Rothenbaum dabei. Als Attraktionen bleiben nun Topfavorit Tsitsipas und der zweimalige Turniersieger Bassilaschwili.",
  //           "url": "https://www.abendblatt.de/hamburg/article232791685/Tennis-Aus-Kohlschreiber-und-Koepfer-am-Rothenbaum.html",
  //           "source": "Hamburger Abendblatt",
  //           "image": "https://img.abendblatt.de/img/incoming/crop232791683/1660563816-w260-cv3_2/Tennisspieler-Dominik-Koepfer.jpg",
  //           "category": "general",
  //           "language": "de",
  //           "country": "de",
  //           "published_at": "2021-07-14T18:17:27+00:00"
  //       },
  //       {
  //           "author": null,
  //           "title": "Local Tennis Star Signs With iTUSA Tennis Academy",
  //           "description": "(marketscreener.com) Kylie Mckenzie to launch her professional career at elite Glendale training centerhttps://www.marketscreener.com/news/latest/Local-Tennis-Star-Signs-With-iTUSA-Tennis-Academy--36267886/?utm_medium=RSS&utm_content=20210827",
  //           "url": "https://www.marketscreener.com/news/latest/Local-Tennis-Star-Signs-With-iTUSA-Tennis-Academy--36267886/?utm_medium=RSS&utm_content=20210827",
  //           "source": "4-traders",
  //           "image": null,
  //           "category": "general",
  //           "language": "en",
  //           "country": "us",
  //           "published_at": "2021-08-27T18:37:02+00:00"
  //       },
  //       {
  //           "author": "Reuters",
  //           "title": "Tennis-Osaka felt ‘ungrateful’ for her attitude to tennis",
  //           "description": "Naomi Osaka said she had felt &#8220;ungrateful&#8221; at times over the last year for not fully appreciating her life as one of the world&#8217;s top tennis players. The world number two sealed a comeback victory over Coco Gauff at the Western & Southern Open in Cincinnati on Wednesday, her first event outside the Olympics since [&#8230;]",
  //           "url": "https://nationalpost.com/pmn/sports-pmn/tennis-osaka-felt-ungrateful-for-her-attitude-to-tennis",
  //           "source": "nationalpost",
  //           "image": null,
  //           "category": "general",
  //           "language": "en",
  //           "country": "us",
  //           "published_at": "2021-08-19T05:22:06+00:00"
  //       }
  //   ]
  // });
  const [newsData,setNewsData] = useState({});
  const newsApiKey = "abb061c97806ac5fbae04e323e379b05";

  return (
    <div>
      <h1>IP Data</h1>
      <ShowIP userIP={userIP} setUserIP={setUserIP} geoApiKey={geoApiKey}/>
      <h1>News Data</h1>
      <ShowNewsData newsApiKey={newsApiKey} newsData={newsData} setNewsData={setNewsData}/>
      <h1>Counter Redux example</h1>
      <ShowCounter/>
    </div>
  );
}

export default App;
