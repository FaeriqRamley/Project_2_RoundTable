import React from 'react'
import {useSelector} from 'react-redux'
import ArticleNavList from './ArticleNavList';

const ArticleNav = () => {
    const selectedPublishers = useSelector(state => state.selectedPublishers);
    const newsData = useSelector(state => state.newsData);
    const dummyNewsData = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "UK aims to conclude Pacific trade group talks by end of 2022 - FT - Reuters",
            "description": "Britain aims to conclude negotiations to join the trans-Pacific trade group by the end of 2022, the Financial Times <a href=\"https://on.ft.com/3gH8R7X\" target=\"_blank\">reported</a> on Saturday, citing International Trade Secretary Liz Truss.",
            "url": "https://www.reuters.com/world/uk/uk-aims-conclude-pacific-trade-group-talks-by-end-2022-ft-2021-08-28/",
            "urlToImage": "https://www.reuters.com/resizer/hCjtdxkxZqCxiVHVN6Xnc2CkOFE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TLYGUTHOURONFOU6APL3KHFONA.jpg",
            "publishedAt": "2021-08-28T04:00:00Z",
            "content": "British trade minister Liz Truss speaks to Reuters after signing a free trade agreement with Singapore, in Singapore December 10, 2020. REUTERS/Pedja StanisicAug 28 (Reuters) - Britain aims to conclu… [+1206 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Hyonhee Shin",
            "title": "U.S. envoy for North Korea to visit South amid standoff over military drills - Reuters Australia",
            "description": "The U.S. envoy for North Korea will visit South Korea this weekend, South Korea's foreign ministry said on Friday, amid a standoff over South Korea-U.S. military exercises that the North has warned could trigger a security crisis.",
            "url": "https://www.reuters.com/article/us-southkorea-usa-northkorea-idUSKBN2FL0YP",
            "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20210820&t=2&i=1572457472&r=LYNXMPEH7J0HM&w=800",
            "publishedAt": "2021-08-20T09:36:00Z",
            "content": "SEOUL (Reuters) - The U.S. envoy for North Korea will visit South Korea this weekend, South Koreas foreign ministry said on Friday, amid a standoff over South Korea-U.S. military exercises that the N… [+2547 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "ALEXANDRA JAFFE",
            "title": "US VP Harris: Focus must stay on Afghan evacuation",
            "description": "Vice President Kamala Harris asserted Monday that the U.S. must maintain its focus on evacuating Americans and vulnerable Afghans and shouldn’t get...",
            "url": "https://news.yahoo.com/us-vp-harris-focus-must-073814064.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/t5kEyJdbuNRpyB2lJBj8Bw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzM0/https://s.yimg.com/uu/api/res/1.2/d1q_BitlRUBn7GodPz11BA--~B/aD0zMzM1O3c9NTAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/cede7d4435af8f08b9ed343a8ac6c84b",
            "publishedAt": "2021-08-23T07:38:14Z",
            "content": "SINGAPORE (AP) Vice President Kamala Harris asserted Monday that the U.S. must maintain its focus on evacuating Americans and vulnerable Afghans and shouldnt get distracted by questions over what wen… [+5715 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Hyonhee Shin",
            "title": "U.S. envoy for North Korea to visit South amid standoff over military drills - Reuters",
            "description": "The U.S. envoy for North Korea will visit South Korea this weekend, South Korea's foreign ministry said on Friday, amid a standoff over South Korea-U.S. military exercises that the North has warned could trigger a security crisis.",
            "url": "https://www.reuters.com/world/asia-pacific/us-envoy-north-korea-visit-south-amid-standoff-over-military-drills-2021-08-20/",
            "urlToImage": "https://www.reuters.com/resizer/cBir9v0m_kUqKse-3qVViPhy-Hg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F6QFQQNYCJLCLG6VLJFATXKR5E.jpg",
            "publishedAt": "2021-08-20T09:36:00Z",
            "content": "Sung Kim, US special representative for North Korea, speaks at a meeting at a hotel in Seoul , South Korea June 21, 2021. Jung Yeon-Je/Pool via REUTERS/File PhotoSEOUL, Aug 20 (Reuters) - The U.S. en… [+2701 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "AP",
            "title": "Harris’ Asia Trip Carries New Urgency After Afghan Collapse",
            "description": "Vice President Kamala Harris will attempt to reassure allies of American resolve following the chaotic end of a two-decade war.",
            "url": "https://www.huffpost.com/entry/kamala-harris-asia-afghanistan_n_611fd85ee4b0e5b5d8e9b765",
            "urlToImage": "https://img.huffingtonpost.com/asset/611fd901280000f0dc71e280.jpeg?cache=wqlqeqjko1&ops=1778_1000",
            "publishedAt": "2021-08-20T16:33:55Z",
            "content": "WASHINGTON (AP) The Taliban takeover of Afghanistan has given new urgency to Vice President Kamala Harris tour of southeast Asia, where she will attempt to reassure allies of American resolve followi… [+6055 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Harris heads to Singapore, Vietnam in shadow of Taliban rise",
            "description": "Vice president's trip, set to focus on China, comes as some allies question US credibility after Afghanistan chaos.",
            "url": "https://www.aljazeera.com/news/2021/8/20/harris-embarks-on-asia-trip-in-shadow-of-taliban-rise",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/08/AP21222520693850.jpg?resize=1200%2C630",
            "publishedAt": "2021-08-20T09:39:13Z",
            "content": "United States Vice President Kamala Harris will embark on Friday on a trip to Asia, with the rise of the Taliban in Afghanistan and Washingtons desperate scramble to evacuate Americans and vulnerable… [+3456 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Vivian Ho",
            "title": "Joe Biden approval rating slides amid Afghanistan and Covid | First Thing",
            "description": "President called upon to extend 31 August deadline to complete evacuations from AfghanistanGood morning.Joe Biden is facing mounting pressure, both home and abroad, as the evacuations in Afghanistan and the pandemic come together in a perfect storm. Continue …",
            "url": "https://amp.theguardian.com/us-news/2021/aug/24/first-thing-joe-biden-approval-rating-dips-amid-afghanistan-and-covid-crises",
            "urlToImage": "https://i.guim.co.uk/img/media/97b443b48cec0f3fcf8cb3f30c2acf1413407513/0_117_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4fee37db47d7db69c5103df52ece09d4",
            "publishedAt": "2021-08-24T10:57:24Z",
            "content": "Good morning.\r\nJoe Biden is facing mounting pressure, both home and abroad, as the evacuations in Afghanistan and the pandemic come together in a perfect storm.\r\n<ul><li>Bidens job approval rating fe… [+5313 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Philip Elliott",
            "title": "You’re Not Imagining It: Biden Is Building His Team Slower Than Recent Presidents",
            "description": "This article is part of the The DC Brief, TIME’s politics newsletter. Sign up here to get stories like this sent to your inbox every weekday. Earlier today, President Joe Biden wrestled a win out of a deeply divided Senate and inched closer to signing a bipar…",
            "url": "https://time.com/6089083/joe-biden-nominations/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2021/08/GettyImages-1331163845.jpg?quality=85&w=1024&h=628&crop=1",
            "publishedAt": "2021-08-10T17:59:48Z",
            "content": "This article is part of the The DC Brief, TIME’s politics newsletter. Sign up here to get stories like this sent to your inbox every weekday.\r\nEarlier today, President Joe Biden wrestled a win out of… [+7450 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Alexandra Jaffe",
            "title": "Kamala Asia trip carries new urgency...",
            "description": "Kamala Asia trip carries new urgency...\r\n\n \n \n \n (Top headline, 6th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Taliban revenge fears grow in Afghanistan...\r\nWest mocked in ISIS-style video...\r\nU.S.-made planes, guns, goggles seized...\r\nConfidential Cable Warne…",
            "url": "https://apnews.com/article/joe-biden-business-health-asia-coronavirus-pandemic-b84037686dc2395266a1bfa333f8c06e",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/918eb558ae52400e940bc5a3ab4173d0/3000.jpeg",
            "publishedAt": "2021-08-20T12:37:36Z",
            "content": "WASHINGTON (AP) The Taliban takeover of Afghanistan has given new urgency to Vice President Kamala Harris tour of southeast Asia, where she will attempt to reassure allies of American resolve followi… [+6056 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Vivian Ho",
            "title": "Biden rejects calls to extend Afghanistan withdrawal deadline | First Thing",
            "description": "President cites growing threat of a terrorist attack as he resolves to end evacuation effort by 31 AugustGood morning.Joe Biden is standing by his 31 August deadline to withdraw from Afghanistan, rejecting the pleas of domestic and international allies to kee…",
            "url": "https://amp.theguardian.com/us-news/2021/aug/25/first-thing-biden-rejects-calls-extend-afghanistan-withdrawal-deadline",
            "urlToImage": "https://i.guim.co.uk/img/media/de1c3a0e2320e577abbc76a3075d0f5e64e9d3d4/0_0_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8841ddf935d1e029914ffbf47ccfe301",
            "publishedAt": "2021-08-25T11:31:38Z",
            "content": "Good morning.\r\nJoe Biden is standing by his 31 August deadline to withdraw from Afghanistan, rejecting the pleas of domestic and international allies to keep troops there for evacuation efforts beyon… [+6975 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Reuters",
            "title": "Extreme caution urged in Gulf of Oman after ‘non-piracy incident’",
            "description": "Activity reported off coast of United Arab Emirates follows suspected drone strike on tankerA “non-piracy incident” is under way off the coast of Fujairah, in the United Arab Emirates, the United Kingdom Maritime Trade Operations (UKMTO) reported on Tuesday.T…",
            "url": "https://amp.theguardian.com/uk-news/2021/aug/03/extreme-caution-urged-in-gulf-of-oman-after-non-piracy-incident",
            "urlToImage": "https://i.guim.co.uk/img/media/9405df412d9b21aa9b36a3d726f9d7d31529ae55/38_0_3924_2354/master/3924.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=77a23f8eba1cda759050f4435746912e",
            "publishedAt": "2021-08-03T14:58:21Z",
            "content": "A non-piracy incident is under way off the coast of Fujairah, in the United Arab Emirates, the United Kingdom Maritime Trade Operations (UKMTO) reported on Tuesday.\r\nThe UKMTO warning notice, based o… [+1375 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Agence France-Presse in Seoul",
            "title": "‘Treacherous’: Kim Jong-un’s sister condemns South Korea-US war games",
            "description": "Kim Yo-jong, a key adviser to North Korean ruler, interrupts surprise thaw in relations on Korean peninsulaThe influential sister of the North Korean ruler, Kim Jong-un, has called Seoul authorities “treacherous” over the South’s joint military exercises with…",
            "url": "https://amp.theguardian.com/world/2021/aug/10/treacherous-kim-jong-uns-sister-condemns-south-korea-us-war-games",
            "urlToImage": "https://i.guim.co.uk/img/media/d3226213488610ded829ec5232c9f05891fb113e/0_0_4444_2665/master/4444.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=45886ae19c9a50be4bf3b3861bc2f5da",
            "publishedAt": "2021-08-10T02:30:20Z",
            "content": "The influential sister of the North Korean ruler, Kim Jong-un, has called Seoul authorities treacherous over the Souths joint military exercises with the US, warning the two allies would face greater… [+1716 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Spacewar.com"
            },
            "author": null,
            "title": "Harris accuses China of 'intimidation' in disputed seas",
            "description": "Singapore (AFP) Aug 24, 2021\n\n\n Vice President Kamala Harris accused China on Tuesday of intimidation in disputed Asian waters, seeking to rally regional allies as the United States' superpower status takes a hit in Afghanistan. \n\nHer comments in Singapore ca…",
            "url": "https://www.spacewar.com/reports/Harris_accuses_China_of_intimidation_in_disputed_seas_999.html",
            "urlToImage": "https://www.spxdaily.com/images-hg/south-china-sea-dispute-collage-hg.jpg",
            "publishedAt": "2021-08-24T08:30:30Z",
            "content": "Vice President Kamala Harris accused China on Tuesday of intimidation in disputed Asian waters, seeking to rally regional allies as the United States' superpower status takes a hit in Afghanistan.\r\nH… [+5124 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Jessica Tan, Contributor, \n Jessica Tan, Contributor\n https://www.forbes.com/sites/jessicatan/",
            "title": "Evan Kwee Charts New Waters For Overseas Expansion For His Singapore Property Family",
            "description": "Pontiac Land’s Evan Kwee is pushing past the pandemic with a new resort development in the Maldives, as part of the Kwee family’s expansion out of Singapore and into the global high-end hospitality market.",
            "url": "https://www.forbes.com/sites/jessicatan/2021/08/11/evan-kwee-charts-new-waters-for-overseas-expansion-for-his-singapore-property-family/",
            "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F611370629e8e1c836b8aff3b%2F0x0.jpg",
            "publishedAt": "2021-08-11T21:17:10Z",
            "content": "Evan Kwee has long loved hotels. I still remember peering over our balcony [at home in Singapore] every night watching them construct the Regent [hotel] as a young boy. Hotels are in my blood, he onc… [+10984 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT",
            "title": "VP Harris says Beijing threatens ‘rules-based order’ & ‘national sovereignty’ in broadside on China during Singapore visit",
            "description": "US Vice President Kamala Harris unloaded on China during an official stop in Singapore, accusing Beijing of attempting to grab up territory in the South China Sea and threatening the Washington-led “rules based order.” Read Full Article at RT.com",
            "url": "https://www.rt.com/usa/532874-harris-china-coercion-intimidation/",
            "urlToImage": "https://cdni.rt.com/files/2021.08/article/61247bec85f5406d6a311288.JPG",
            "publishedAt": "2021-08-24T05:15:57Z",
            "content": "After landing in Singapore for a trip through Southeast Asia this week, Harris outlined the Joe Biden administration’s vision for the region in a speech on Tuesday, saying it seeks to advance “peace … [+2250 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Andrew Ross Sorkin, Jason Karaian, Sarah Kessler, Stephen Gandel, Lauren Hirsch, Ephrat Livni and Anna Schaverien",
            "title": "What is Apple Thinking?",
            "description": "The company’s recent concessions over its App Store could be part of a deliberate strategy to protect more important revenue streams.",
            "url": "https://www.nytimes.com/2021/09/03/business/dealbook/apple-app-store-antitrust.html",
            "urlToImage": "https://static01.nyt.com/images/2021/09/03/business/03db-newsletter-apple/03db-newsletter-apple-facebookJumbo.jpg",
            "publishedAt": "2021-09-03T11:58:06Z",
            "content": "The jury for Elizabeth Holmess trial is sworn in. Seven men and five women were chosen to decide the Theranos founders fate. Holmes faces 12 counts of fraud and conspiracy to commit wire fraud over f… [+2256 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "Timothy McLaughlin",
            "title": "What China’s Afghan Bluster Hides",
            "description": "Beijing’s gloating over America’s withdrawal masks a deeper anxiety.",
            "url": "https://www.theatlantic.com/international/archive/2021/09/china-taiwan-afghanistan/619950/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2021-09-02T10:00:00Z",
            "content": "As the United States rushed to evacuate people from an Afghanistan that is once again controlled by the Taliban, China has crowed over America’s failure in nearly every conceivable way. A former high… [+11502 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "BBC",
            "title": "Yongbyon: UN says North Korea appears to restart nuclear reactor",
            "description": "A UN report says the reactor, which can produce plutonium for weapons, has been active since July.",
            "url": "https://news.yahoo.com/yongbyon-un-says-north-korea-005226577.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/sZzNaG40HG2dKNbNEVCmBQ--~B/aD01NDk7dz05NzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/bbc_us_articles_995/711bebc974a22ff83b4d8a16def3b00e",
            "publishedAt": "2021-08-30T00:59:15Z",
            "content": "A satellite image of Yongbyon from December 2019\r\nNorth Korea appears to have restarted its Yongbyon nuclear reactor, the UN atomic agency has said in a report.\r\nThe reactor is believed to produce pl… [+2200 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT",
            "title": "‘Cool as f*ck’ Putin had 30 ‘hot-ass’ Russian women, led nightclub visit and boasted 10 Bentley cars, NBA legend Rodman reveals",
            "description": "Dennis Rodman missed out on a \"super 10\" girl in a nightclub because she had to \"go deal with Putin\", the NBA icon has claimed in a story of a luxurious trip to Russia in which he partied with the \"cool as f*ck\" president. Read Full Article at RT.com",
            "url": "https://www.rt.com/sport/533842-dennis-rodman-putin-trump-kim/",
            "urlToImage": "https://cdni.rt.com/files/2021.09/article/613212ba85f5405a6e71ce7e.jpg",
            "publishedAt": "2021-09-03T12:32:39Z",
            "content": "Basketball great Rodman has revealed his playboy antics on a trip to meet personal friend Putin in Russia, which he says took place \"a couple of years ago\" and involved dozens of beautiful women.\r\nRo… [+2382 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Diplomat"
            },
            "author": "Sebastian Strangio",
            "title": "Harris Meets With Singapore Officials to Begin Asia Visit",
            "description": "On the first day of her Southeast Asian trip, the vice president signed agreements on COVID-19, climate change, and supply chain issues.",
            "url": "https://thediplomat.com/2021/08/harris-meets-with-singapore-officials-to-begin-asia-visit/",
            "urlToImage": "https://thediplomat.com/wp-content/uploads/2021/08/sizes/td-story-s-2/thediplomat_2021-08-23-4.jpg",
            "publishedAt": "2021-08-23T11:59:54Z",
            "content": "Advertisement\r\nThe White House on Monday announced a series of new agreements with Singapore aimed at combating cyber threats, tackling climate change, addressing the COVID-19 pandemic, and alleviati… [+6159 chars]"
        }
    ]

    const displayArticle = {};
    //** change to newsData once done
    for (const news of dummyNewsData){
        if(selectedPublishers.indexOf(news.source.name) !== -1){
            if(typeof displayArticle[news.source.name] === "undefined"){
                displayArticle[news.source.name] = [news];
            }
            else{
                displayArticle[news.source.name].push(news);
            }
        }
    }

    return (
        <div className="accordion" id="articleNav">
            {Object.entries(displayArticle).map((item,index)=>{
                return (
                    <ArticleNavList
                        key={index}
                        publisher={item[0]}
                        newsArr={item[1]}
                        articleNum={item[1].length}
                    />
                )
            })}
        </div>
    )
}

export default ArticleNav
