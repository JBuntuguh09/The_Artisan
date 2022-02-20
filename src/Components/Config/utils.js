class utils {
    
    camalize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

    getArr(val){
        //{label: "Degree", value: "Degree"}
            var list = []
            var set ={}
            var  newArr = val.split(", ")
            if(newArr.length===1){
                for(var r=0; r<newArr.length; r++){
                    // list.push(newArr[r])
                     set = {...set, label:newArr[r], value:newArr[r]}
                     //list.push(set)
                     
                 }

                 return set
            }else {
            for(var ro=0; ro<newArr.length; ro++){
               // list.push(newArr[r])
                set = {...set, label:newArr[ro], value:newArr[ro]}
                list.push(set)
            }
            //alert(JSON.stringify(list))
            return list
        }
            
        }
     getRegions() {
    
        return ["Ahafo", "Ashanti", "Bono", "Bono East", "Central", "Eastern","Greater Accra",
        "North East", "Northern", "Oti", "Savannah", "Upper East", "Upper West", "Volta", "Western", "Western North"];
    }

    getGender(){
        //return ["Male", "Female"]
        var list =[]
        list.push("Male")
        list.push("Female")

        return list
    }

    getMarital(){
        return ["Single", "Married", "Divorced", "Widowed"]
    }

    getReligion(){
        var list = []
        list.push("Christian")
        list.push("Moslem")
        list.push("Traditionalist")
        list.push("Other")
        
        return list
    }

    getPositions(){
       return["President","General Secretary",  "Financial Secretary", "Organizer"]
    }
    
    getCountry(){
        return["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
         "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", 
         "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", 
         "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
          "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
          "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
          "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
           "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
        "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
        "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", 
        "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", 
        "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
    }



    getFinancial(){
        return["jerry adu baffoe", "Linda Adwoa  Amakye", "Akosua Aboagyewaa"]
    }

    getGenSec(){
        return[
            "Ama Sakyiwaa Ofori-Kyere", "Akosua Aboagyewaa"
        ]
    }

    getOrganizer(){
        return ["kwadwo wiafe Akenten", "Elvis Abai Alakawen", "Akosua Aboagyewaa"]
    }

    getPresident(){
        return ["SAMUEL TUFFOUR BENYAH", "Akosua  Donkor  Cisse Tuffour", "Akosua Aboagyewaa"]
    }
    getNomination(){
        return["President", "General Secretary", "Financial Secretary", "Organizer"]
    }
   

    getUniversity(){
        var list = []
        list.push("Other");
        list.push("University of Ghana");
        list.push("University of Cape Coast");
        list.push( "Kwame Nkrumah University of Science and Technology");
        list.push( "University of Education");
        list.push( "University of Professional Studies");
        list.push( "University of Development Studies");
        list.push( "Ashesi University");
        list.push( "Valley View University");
        list.push("University of Mines and Technology");
        list.push( "University of Health and Allied Sciences");
        list.push( "University of Energy And Natural Resources");
        list.push( "Accra Technical University");
        list.push( "Cape Coast Technical University");
        list.push( "Kumasi Technical University");
        list.push( "Koforidua Technical University");
        list.push( "Tamale Technical University");
        list.push( "Ho Technical University");
        list.push( "Takoradi Technical University");
        list.push( "Sunyani Technical University");
        list.push( "Ghana Institute of Journalism");
        list.push( "Ghana Institute of Languages");
        list.push( "Ghana Institute of Management and Public Administration");
        list.push( "Ghana Institute of Surveying and Mapping");
        list.push( "Institution of Local Government Studies");
        list.push( "University of Professional Studies, Accra");
        list.push("Kofi Annan International Peacekeeping Training Centre");
        list.push("Central University");
        list.push("Pentecost University");
        list.push("All Nations University");
        list.push("Accra Institute of Technology");
        list.push("Presbyterian University College[");
        list.push("Central University");
        list.push("Wisconsin International University College");
        list.push("Catholic University College of Ghana");
        
        
        return list
    }


    getQualifications(){
        var list = []

        list.push("Masters")
        list.push("Degree")
        list.push("HND")
        list.push("WASSCE")
        list.push("BECE")

        return list
    }

    getLanguages(){
        var langs = []

        langs.push("English");
        langs.push("French");
        langs.push("Mandarin");
        langs.push("Spanish");
        langs.push("Portuguese");
        langs.push("Twi");
        langs.push("Ga");
        langs.push("Ewe");
        langs.push("Fante");
        langs.push("Kasem");
        langs.push("Hausa");
        langs.push("Gonja");
        langs.push("Dagbani");
        langs.push("Dagaati");
        langs.push("Sisaala");
        langs.push("Konkomba");
        langs.push("Frafra");
        langs.push("Wasa");
        langs.push("Ahanta");
        langs.push("Sehwi");
        langs.push("Nzema");
        langs.push("Waali");
        langs.push("Kaakye");
        langs.push("Russian");
        langs.push("Okere");
        langs.push("Yoruba");
        langs.push("German");
        langs.push("Dutch");

        return langs
    }

    getJobField(){
        var listJob = []
        listJob.push("Athlete");
        listJob.push("Banking and Finance");
        listJob.push("Building and Construction");
        listJob.push("Education");
        listJob.push("Entrepreneur");
        listJob.push("Fashion");
        listJob.push("Sales");
        listJob.push("Entertainment");
        listJob.push("Sports");
        listJob.push("Hospitality");
        listJob.push("Information Technology");
        listJob.push("Journalism");
        listJob.push("Law");
        listJob.push("Medical");
        listJob.push("Theater");
        listJob.push("Private Security");
        listJob.push("Security Services(Gov't)");
        listJob.push("Civil Servant");
        listJob.push("Other");
        listJob.push("None");
        return listJob;
    }

    

    

    getSHS(){
        var list = []
        list.push(  "Other");
		list.push(  "Asare Bediako Senior High");
        list.push(  "Bodwesango Senior High");
        list.push(  "Dompoase Senior High");
        list.push(  "Fomena T I Ahmad Senior High");
        list.push(  "Akrofuom Senior High and Tech");
        list.push(  "New Edubiase Senior High");
        list.push(  "Obuasi Senior High and Tech");
        list.push(  "Aduman Senior High");
        list.push(  "Agona Senior High and Tech");
        list.push(  "Otumfuo Osei Tutu II College");
        list.push(  "St Michaels Senior High Ahenkro");
        list.push(  "Maabang Senior High and Tech");
        list.push(  "Tepa Senior High");
        list.push(  "Adugyama Comm Senior High");
        list.push(  "Mankranso Senior High");
        list.push(  "Jacobu Senior High and Tech");
        list.push(  "Esaase Bontefufuo Snr High and Tech");
        list.push(  "Manso-Adubia Senior High");
        list.push(  "Mansoman Senior High");
        list.push(  "Juaso Senior High and Tech");
        list.push(  "Konongo Odumase Senior High");
        list.push(  "St Marys Girls Sen High");
        list.push(  "Wesley Senior High");
        list.push(  "Agogo State College");
        list.push(  "Collins Senior High and Commercial");
        list.push(  "Owerriman Senior High");
        list.push(  "Banka Comm Senior High");
        list.push(  "Bompata Presby Senior High");
        list.push(  "Kumasi Academy");
        list.push(  "Parkoso Comm Senior High");
        list.push(  "Sakafia Islamic Senior High");
        list.push(  "Afua Kobi Ampem Girls Senior High");
        list.push(  "Atwima Kwanwoma Snr High and Tech");
        list.push(  "Adobewora Comm Senior High");
        list.push(  "Mpasatia Senior High and Tech");
        list.push(  "Nyinahin Cath Senior High");
        list.push(  "Barekese Senior High");
        list.push(  "Nkawie Senior High and Tech");
        list.push(  "Osei Tutu Senior High");
        list.push(  "Toase Senior High");
        list.push(  "Denyaseman Cath Senior High");
        list.push(  "Ofoase Kokoben Senior High");
        list.push(  "Ofoase Senior High and Tech");
        list.push(  "Oppong Mem Senior High");
        list.push(  "SDA Senior High, Bekwai");
        list.push(  "St Joseph Senior High and Tech");
        list.push(  "Wesley High School, Bekwai");
        list.push(  "Bosome Senior High and Technical");
        list.push(  "Bosomtwe Oyoko Comm Senior High");
        list.push(  "Jachie Pramso Senior High");
        list.push(  "St Georges Senior High Tech");
        list.push(  "Achinakrom Senior High");
        list.push(  "Bonwire Senior High and Tech");
        list.push(  "Ejisu Senior High and Tech");
        list.push(  "Ejisuman Senior High");
        list.push(  "Juaben Senior High");
        list.push(  "Ejuraman Anglican Senior High");
        list.push(  "Sekyedumase Senior High");
        list.push(  "Adventist Senior High");
        list.push(  "Agric Nzema Senior High, Kumasi");
        list.push(  "Al-Azariya Islamic Snr High");
        list.push(  "Anglican Senior High");
        list.push(  "Armed Forces Senior High and Tech");
        list.push(  "Asanteman Senior High");
        list.push(  "Bethel Methodist Technincal Institute");
        list.push(  "Islamic Senior High");
        list.push(  "KNUST Senior High");
        list.push(  "Kumasi Girls Senior High");
        list.push(  "Kumasi Senior High");
        list.push(  "Kumasi Senior High and Tech");
        list.push(  "Kumasi Tech Inst");
        list.push(  "Kumasi Wesley Girls High Sch");
        list.push(  "Nuru-Ameen Islamic Senior High");
        list.push(  "Opoku Ware Senior High");
        list.push(  "Osei Kyeretwie Senior High");
        list.push(  "Pentecost Senior High, Kumasi");
        list.push(  "Prempeh College");
        list.push(  "Serwaah Nyarko Girls Snr High");
        list.push(  "St Hubert Sem and Senior High");
        list.push(  "St Louis Senior High");
        list.push(  "T I Ahmadiyya Senior High");
        list.push(  "Tawheed Senior High");
        list.push(  "uthmaniya SENIOR HIGH SCHOOL");
        list.push(  "Yaa Asantewaa Girls Senior High");
        list.push(  "Adanwomase Senior High");
        list.push(  "Adu Gyamfi Senior High");
        list.push(  "Adventist Girls Senior High");
        list.push(  "Antoa Senior High");
        list.push(  "Gyaama Pensan Senior High and Tech");
        list.push(  "Kofi Adjei Senior High and Tech");
        list.push(  "SDA Senior High, Agona");
        list.push(  "Amaniampong Senior High");
        list.push(  "Kofiase Adventist Senior High and Tech");
        list.push(  "Simms Senior High and Com");
        list.push(  "St Joseph Sem and Senior High");
        list.push(  "St Monicas Senior High");
        list.push(  "Christ the King Cath");
        list.push(  "Dwamena Akenten Senior High");
        list.push(  "Namong Senior High");
        list.push( "St Jerome Senior High");
        list.push( "Akumadan Senior High");
        list.push( "Nkenkansu Community Senior High");
        list.push( "Beposo Senior High");
        list.push( "Ghana Muslim Mission Senior High");
        list.push( "Nsutaman Cath Senior High");
        list.push( "Presby Senior High");
        list.push( "Effiduase Senior High and Com");
        list.push( "Krobea Asante Tec and Voc Sch");
        list.push( "T I Ahmadiyya Girls Senior High");
        list.push( "Tijjaniya Senior High");
        list.push( "Bankoman Senior High");
        list.push( "Dadease Agric Senior High");
        list.push( "Tweneboa Kodua Senior High");
        list.push( "Konadu Yiadom Senior High");
        list.push( "Okomfo Anokye Senior High");
        list.push( "Ahafoman Senior High and Tech");
        list.push( "Mim Senior High");
        list.push( "Kukuom Agric Senior High");
        list.push( "Sankore Senior High");
        list.push( "Gyamfi Kumanini Senior High and Tech");
        list.push( "OLA Girls Senior High, Kenyasi");
        list.push( "Acherensua Senior High");
        list.push( "Hwidiem Senior High");
        list.push( "Amanten Senior High");
        list.push( "Atebubu Senior High");
        list.push( "Bandaman Senior High");
        list.push( "Berekum Presby Senior High");
        list.push( "Berekum Senior High");
        list.push( "Jinijini Senior High");
        list.push( "Methodist Senior High and Tech");
        list.push( "St Augustine Senior High, Berekum");
        list.push( "Dormaa Senior High");
        list.push( "Salvation Army Senior High");
        list.push( "Mansen Senior High Sch");
        list.push( "Wamanafo Com Day Snr High and Tech");
        list.push( "Nkrankwanta Comm Senior High");
        list.push( "Diamono Senior High Sch");
        list.push( "Goka Senior High and Tech");
        list.push( "Nafana Senior High");
        list.push( "St Anns Girls Senior High");
        list.push( "Sumaman Senior High");
        list.push( "Drobo Senior High");
        list.push( "Our Lady of Providence Senior High");
        list.push( "DEGA COMM SENIOR HIGH");
        list.push( "Kintampo Senior High");
        list.push( "Jema Senior High");
        list.push( "Kwabre Senior High");
        list.push( "Yefriman Senior High");
        list.push( "Busunya Senior High");
        list.push( "Nkoranza Senior High and Technical school");
        list.push( "Nkoranza Tech Inst");
        list.push( "Abease Comm.Day School");
        list.push( "Prang Senior High");
        list.push( "Yeji Senior High and Tech");
        list.push( "Kajaji Senior High");
        list.push( "Kwame Danso Senior High and Tech");
        list.push( "SDA Senior High, Sunyani");
        list.push( "St James Sem and Senior High");
        list.push( "Sunyani Methodist Technical Inst");
        list.push( "Sunyani Senior High");
        list.push( "Twene Amanfo Senior High and Tech");
        list.push( "Chiraa Senior High");
        list.push( "Don Bosco Voc and Tech Inst");
        list.push( "Notre Dame Girls Senior High");
        list.push( "Odomaseman Senior High");
        list.push( "Sacred Heart Senior High");
        list.push( "Badu Senior HighTech");
        list.push( "Menji Senior High");
        list.push( "Nkoranman Senior High");
        list.push( "Nsawkaw State Senior High");
        list.push( "Boakye Tromo Senior High and Tech");
        list.push( "Bomaa Comm Senior High");
        list.push( "Serwaa Kesse Girls Senior High School");
        list.push( "Yamfo Anglican Senior High School");
        list.push( "Bechem Presby Senior High");
        list.push( "Derma Comm Day Senior High School");
        list.push( "Presby Senior High and Comm");
        list.push( "Kesse Basahyia Senior High");
        list.push( "Kwarteng Ankomah Senior High");
        list.push( "Our Lady Mount Carmel Girls Senior High");
        list.push( "Techiman Senior High");
        list.push( "Yeboah Asuamah Senoir High");
        list.push( "Ameyaw Akumfi Senior High and Tech");
        list.push( "Guakro Effah Senior High");
        list.push( "Krobo Comm Senior High");
        list.push( "St Francis Seminary and Senior High School");
        list.push( "Tuobodom Senior High and Tech");
        list.push( "Istiquaama Snr High");
        list.push( "Koase Senior High and Tech");
        list.push( "Nchiraa Senior High Sch");
        list.push( "Wenchi Meth Senior High");
        list.push( "Aburaman Senior High");
        list.push( "Aggrey Mem AME Zion Snr High");
        list.push( "Asuansi Tech Inst");
        list.push( "Moree Comm Senior High");
        list.push( "Moree Senior High Tech");
        list.push( "Agona Namonwora Senior High School");
        list.push( "Kwanyako Senior High");
        list.push( "Swedru Senior High");
        list.push( "AGONA FANKOBAA SENIOR HIGH SCHOOL");
        list.push( "Nsaba Presby Senior High");
        list.push( "Nyakrom Senior High Tech");
        list.push( "Siddiq Senior high Sch");
        list.push( "Swedru Sch Of Business");
        list.push( "Abakrampa Senior High and Tech");
        list.push( "Bisease Senior High and Com");
        list.push( "Enyan Denkyira Senior High");
        list.push("ENYAN MAIM COMMUNITY DAY SCHOOL");
        list.push("Enyan-Abaasa Technical Institute");
        list.push( "Mando Senior High and Tech");
        list.push( "Brakwa Senior High and  Technical School");
        list.push( "Breman Asikuma Senior High");
        list.push( "Odoben Senior High");
        list.push( "Assin Manso Senior High");
        list.push( "Assin North Senior High and Tech");
        list.push( "Assin State College");
        list.push( "Gyaase Community Senior High");
        list.push( "Nyankumase Ahenkro Snr High");
        list.push( "Obiri Yeboah Senior High and Technical*");
        list.push( "Adankwaman Senior High and Com");
        list.push( "Assin Nsuta Senior High");
        list.push( "Awutu Bawjiase Comm Senior High");
        list.push( "Obrakyere Senior High and Tech");
        list.push( "Senya Senior High");
        list.push( "Awutu Winton SHS");
        list.push( "ODUPONG COMM DAY SCHOOL");
        list.push( "Academy of Christ the King");
        list.push( "Adisadel College");
        list.push( "Cape Coast Tech Inst");
        list.push( "Effutu Senior High and Tech");
        list.push( "Ghana National College");
        list.push( "Holy Child School");
        list.push( "Mfantsipim Senior School");
        list.push( "Oguaa Senior High and Tech");
        list.push( "St Augustines College");
        list.push( "University Practice Senior High");
        list.push( "Wesley Girls Senior High");
        list.push( "Winneba Senior High");
        list.push( "Ekumfi T I Ahmadiiyya Snr High");
        list.push( "J E A Mills Senior High");
        list.push( "Fettehman Senior High");
        list.push( "Gomoa Gyaman Senior High");
        list.push( "Potsin T I Ahm Senior High");
        list.push( "Apam Senior High");
        list.push( "College of Music Senior, Mozano");
        list.push( "Gomoa Senior High and Tech");
        list.push( "Mozano Senior High");
        list.push( "Edinaman Senior High");
        list.push( "Eguafo-Abrem Senior High");
        list.push( "Komenda Senior High and Tech");
        list.push( "Kwegyir Aggrey Senior High Technical");
        list.push( "Mankessim Senior High and Tech");
        list.push( "Methodist High School");
        list.push( "Mfantsiman Girls Senior High");
        list.push( "Twifo Praso Senior High");
        list.push( "Jukwa Senior High");
        list.push( "Twifo Hemang Senior High and Tech");
        list.push( "Boa_Amponsem Senior High");
        list.push( "Dunkwa Senior High and Tech");
        list.push( "Diaso Senior High");
        list.push( "Adukrom Senior High and Tech");
        list.push( "Benkum Senior High");
        list.push( "HMt Sinai Day Senior High");
        list.push( "J G Knol Voc Instititute");
        list.push( "Mampong and Akw Snr High and Tech for the Deaf");
        list.push( "Mangoase Senior High");
        list.push( "Methodist Girls Senior High");
        list.push( "Nifa Senior High");
        list.push( "Okuapeman Senior High");
        list.push( "Presby Senior High and Tech, Larteh");
        list.push( "Presby Senior High, Mampong Akwapim");
        list.push( "Presby Senior High and Tech, Aburi");
        list.push( "Aburi Girls Senior High");
        list.push( "Adonten Senior High");
        list.push( "Diaspora Girls Senior High");
        list.push( "Akokoaso Senior High and Tech");
        list.push( "Ayirebi Senior High");
        list.push( "Adjena Senior High and Tech");
        list.push( "Akwamuman Senior High");
        list.push( "ANUM APAPAM COMM DAY SCHOOL");
        list.push( "Anum Presby Senior High");
        list.push( "Apeguso Senior High");
        list.push( "Boso Senior High Technical");
        list.push( "Kwabeng Anglican Senior High and Tech");
        list.push( "S D A Senior High Akim Sekyere");
        list.push( "Kraboa-Coaltar Presby Snr High and Tech");
        list.push( "Achiase Senior High");
        list.push( "Akroso Senior High");
        list.push( "Attafuah Senior High and Tech");
        list.push( "Atweaman Senior High");
        list.push( "Oda Senior High");
        list.push( "St Francis Senior High and Tech");
        list.push( "New Abirem and Afosu Senior High");
        list.push( "St Michaels Senior High, Akoase (Nkawkaw)");
        list.push( "Akim Swedru Senior High");
        list.push( "Aperade Senior High Tech");
        list.push( "Akwatia Tech Inst");
        list.push( "Salvation Army Senior High, Akim Wenchi");
        list.push( "St Roses Senior High");
        list.push( "Tarkrowasi Comm Senior High");
        list.push( "Abuakwa State College");
        list.push( "Akim Asafo Senior High");
        list.push( "Kibi Senior High and Tech");
        list.push( "Ofori Panin Senior High");
        list.push( "Saviour Senior High, Osiem");
        list.push( "St Pauls Tech Inst");
        list.push( "St Stephens Presby Snr High and Tech, Asiakwa");
        list.push( "W B M Zion Senior High");
        list.push( "New Nsutam Senior High and Tech");
        list.push( "Osino Presby Senior High and Tech");
        list.push( "Presby Senior High, Begoro");
        list.push( "Asuom Senior High");
        list.push( "Kade Senior High and Tech");
        list.push( "Amankwakrom Fisheries Agric Tech Inst");
        list.push( "Donkorkrom Agric Senior High");
        list.push( "Mem-Chemfre Comm Senior High");
        list.push( "St Marys Voc and Tech Inst");
        list.push( "MAAME KROBO COMM DAY SCHOOL");
        list.push( "St Fidelis Senior High and Tech");
        list.push( "Abetifi Presby Senior High");
        list.push( "Abetifi Tech Inst");
        list.push( "Kwahu Tafo Senior High");
        list.push( "Nkwatia Presby Senior High and Com");
        list.push( "St Dominics Senior High and Tech");
        list.push( "St Peters Senior High");
        list.push( "Bepong Senior High School");
        list.push( "Kwahu Ridge Senior High");
        list.push( "Mpraeso Senior High");
        list.push( "St Josephs Tech Inst");
        list.push( "St Pauls Senior High");
        list.push( "Fodoa Comm Senior High");
        list.push( "Nkawkaw Senior High");
        list.push( "Akro Senior High and Tech");
        list.push( "Akuse Methodist Senior High and Tech");
        list.push( "Krobo Girls Senior High");
        list.push( "Manya Krobo Senior High");
        list.push( "Ghana Senior High");
        list.push( "Koforidua Senior High and Tech");
        list.push( "Koforidua Tech Inst");
        list.push( "New Juaben Senior High and Com");
        list.push( "Oti Boateng Senior High");
        list.push( "Oyoko Methodist Senior High");
        list.push( "Pentecost Senior High");
        list.push( "Pope John Snr High and Jnr Sem");
        list.push( "SDA Senior High, Koforidua");
        list.push( "Nsawam Senior High");
        list.push( "St Martins Senior High");
        list.push( "Islamic Girls Senior High");
        list.push( "Presby Senior High, Suhum");
        list.push( "Suhum Senior High and Tech");
        list.push( "Asesewa Senior High School");
        list.push( "Adeiso Senior High");
        list.push( "Nyanoa Comm Senior High");
        list.push( "Asamankese Senior High");
        list.push( "St Thomas Senior High and Tech");
        list.push( "Klo-Agogo Senior High");
        list.push( "Yilo Krobo Senior High and Com");
        list.push( "Accra Academy");
        list.push( "Accra Girls Senior High");
        list.push( "Accra Senior High");
        list.push( "Accra Tech Trg Centre");
        list.push( "Achimota Senior High");
        list.push( "Armed Forces Senior High and Tech");
        list.push( "Ebenezer Senior High");
        list.push( "Kaneshie Senior High and Tech");
        list.push( "La Presby Senior High");
        list.push( "Labone Senior High");
        list.push( "Presby Senior High, Osu");
        list.push( "Sacred Heart Tech Inst");
        list.push( "St Margaret Mary Snr.High and Tech");
        list.push( "St Marys Senior High");
        list.push( "St Thomas Aquinas Senior High");
        list.push( "Wesley Grammar Senior High");
        list.push( "Ada Senior High");
        list.push( "Ada Tech Inst");
        list.push( "Ada Senior High and Technical");
        list.push( "Frafraha Comm Senior High");
        list.push( "Ashiaman Senior High");
        list.push( "Don Bosco Voc and Tech Inst");
        list.push( "Accra Wesley Girls High");
        list.push( "Holy Trinity Senior High");
        list.push( "Kinbu Senior High and Tech");
        list.push( "Odorgonno Senior High");
        list.push( "Christian Methodist Senior High");
        list.push( "Ngleshie Amanfro Senior High");
        list.push( "Adjen Kotoku Senior High School");
        list.push( "Amasaman Senior High and Tech");
        list.push( "St Johns Grammar Senior High");
        list.push( "Kpone Comm Senior High");
        list.push( "Presby Boys Senior High");
        list.push( "West Africa Senior High");
        list.push( "Nungua Senior High");
        list.push( "OReilly Senior High");
        list.push( "Presby Senior High, Teshie");
        list.push( "Teshie Tech Instittute");
        list.push( "Ningo Senior High");
        list.push( "Osudoku Senior High and Tech");
        list.push( "Prampram Senior High");
        list.push( "Ghanata Senior High");
        list.push( "Kwabenya Comm Senior High");
        list.push( "Chemu Senior High");
        list.push( "Our Lady of Mercy Senior High");
        list.push( "Presby Senior High, Tema");
        list.push( "Tema Manhean Senior High and Tech");
        list.push( "Tema Meth Day Senior High");
        list.push( "Tema Senior High");
        list.push( "Tema Tech Inst");
        list.push( "BAMBOI COMM DAY SCHOOL");
        list.push( "Bole Senior High");
        list.push( "St Anthony of Padua Snr High and Technical");
        list.push( "Bunkpurugu Senior High and Tech");
        list.push( "Nakpanduri Senior High");
        list.push( "Buipe Senior High");
        list.push( "Buipe Tech and Voc");
        list.push( "Chereponi Senior High and Tech");
        list.push( "Salaga Senior High");
        list.push( "Salaga T I Ahmad Senior High");
        list.push( "Gambaga Girls Senior High");
        list.push( "Nalerigu Senior High");
        list.push( "Gushegu Senior High");
        list.push( "Karaga Senior High");
        list.push( "Kpandai Senior High");
        list.push( "Kumbungu Senior High");
        list.push( "Yagaba Senior High School");
        list.push( "Bimbilla Senior High");
        list.push( "Wulensi Senior High");
        list.push( "Daboya Community Day SHS");
        list.push( "Saboba E P Senior High");
        list.push( "St Josephs Tech Inst");
        list.push( "Wapuli Comm Senior High");
        list.push( "Islamic Science Senior High");
        list.push( "Northern School of Business");
        list.push( "Tamale Senior High");
        list.push( "Tamale Technical Institute");
        list.push( "Pong-Tamale Senior High");
        list.push( "Savelugu Senior High");
        list.push( "Sawla Senior High Sch");
        list.push( "Tuna Senior High and Tech");
        list.push( "Anbariya Senior High Sch");
        list.push( "Business Senior High");
        list.push( "Dabokpa Voc and Tech Inst");
        list.push( "Ghana Senior High");
        list.push( "Kalpohin Senior High");
        list.push( "Presby Senior High");
        list.push( "St Charles Senior High");
        list.push( "Tamale Girls Senior High");
        list.push( "Vitting Senior High and Tech");
        list.push( "E P Agric Senior High and Tech");
        list.push( "Tolon Senior High");
        list.push( "Damongo Senior High");
        list.push( "Ndewura Jakpa Senior High and Tech");
        list.push( "Walewale Senior High");
        list.push( "WalewaleTech and  Voc");
        list.push( "Wulugu Senior High");
        list.push( "Dagbon State Senior High and Tech");
        list.push( "Yendi Senior High");
        list.push( "Zabzugu Senior High");
        list.push( "Bawku Tech Inst");
        list.push( "Bawku Senior High");
        list.push( "Kusanaba Senior High");
        list.push( "Zebilla Senior High and Tech");
        list.push( "Binduri Comm Senior High");
        list.push( "Bawku Senior High and Tech");
        list.push( "Bolga Girls Senior High");
        list.push( "Bolga Sherigu Comm SHS");
        list.push( "Bolga Tech Inst");
        list.push( "Zamse Senior High and Tech");
        list.push( "Zuarungu Senior High");
        list.push( "Bongo Senior High");
        list.push( "Gowrie Senior High and Tech");
        list.push( "Zorkor Community Senior High");
        list.push( "KANJAGA COMM DAY SENIOR HIGH SCHOOL");
        list.push( "Sandema Senior High");
        list.push( "Sandema Senior High and Tech");
        list.push( "Fumbisi Senior High");
        list.push( "Tempane Senior High");
        list.push( "Awe Senior High and Tech");
        list.push( "Notre Dame Sem and  Senior High");
        list.push( "St Bernadettes Tech and Voc");
        list.push( "Chiana Senior High");
        list.push( "Mirigu Community Day Senior High");
        list.push( "Nabango Comm Senior High");
        list.push( "Navrongo Senior High");
        list.push( "O L L Girls Senior High");
        list.push( "Paga Community Day Senior High");
        list.push( "Sirigu Senior High");
        list.push( "St Johns Integrated Snr High and Tech");
        list.push( "Kongo Senior High");
        list.push( "Bolgatanga Senior High");
        list.push( "Daffiamah Senior High");
        list.push( "Jirapa Senior High Day");
        list.push( "St Francis Girls Senior High");
        list.push( "Ullo Senior High");
        list.push( "Holy Family Senior High");
        list.push( "Lambussie Comm Senior High");
        list.push( "Piina Senior High");
        list.push( "Birifoh Senior High Sch");
        list.push( "Eremon Senior High and Tech");
        list.push( "Lawra Senior High");
        list.push( "Kaleo Senior High and Tech");
        list.push( "Queen of Peace Senior High");
        list.push( "St Augustine Senior High and Tech");
        list.push( "St Basilides Voc and Tech Inst");
        list.push( "Takpo Senior High Sch");
        list.push( "Ko Senior High");
        list.push( "Nandom Senior High");
        list.push( "St Johns Voc Tech High Institute");
        list.push( "Kanton Senior High");
        list.push( "Tumu Senior High and Tech");
        list.push( "Dr Hila Liman Senior High School");
        list.push( "Funsi Senior High School");
        list.push( "LOGGU COMM DAY SENIOR HIGH SCHOOL");
        list.push( "Islamic Senior High");
        list.push( "Jamiat-Alhidaya Islamiat Girls");
        list.push( "Northern StarSHS");
        list.push( "T I Ahmadiyya Senior High");
        list.push( "Wa Senior High");
        list.push( "Wa Senior High and Tech");
        list.push( "Wa Tech Inst");
        list.push( "Lassie-Tuolu Senior High");
        list.push( "Adaklu Senior High");
        list.push( "Agate Comm Senior High");
        list.push( "Comboni Tech and Voc");
        list.push( "Jim Bourton Mem Agric Senior High");
        list.push( "Leklebi Senior High");
        list.push( "Ve Senior High Sch");
        list.push( "Agotime Senior High");
        list.push( "Ziope Senior High Sch");
        list.push( "Akatsi Senior High and Tech");
        list.push( "Avenor Senior High");
        list.push( "BOWIRA COM SHTS");
        list.push( "Nkonya Senior High");
        list.push( "Tapaman Senior High");
        list.push( "Worawora Senior High");
        list.push( "Adidome Senior High");
        list.push( "Mafi-Kumasi Senior High and Tech");
        list.push( "E P C Mawuko Girls Senior High");
        list.push( "Mawuli School");
        list.push( "OLA Girls Senior High, Ho");
        list.push( "Shia Senior HighTechnical");
        list.push( "Sokode Senior High and Tech");
        list.push( "Tanyigbe Senior High");
        list.push( "Taviefe Comm Senior High");
        list.push( "Volta Tech Inst");
        list.push( "Abutia Senior High and Tchnical");
        list.push( "Akome Senior High and Tech");
        list.push( "Amedzofe Technical Institute");
        list.push( "Avatime Senior High");
        list.push( "Awudome Senior High");
        list.push( "Dzolo Senior High");
        list.push( "Kpedze Senior High");
        list.push( "Tsito Senior High and Tech");
        list.push( "Afadjato Senior High and Tech");
        list.push( "Akpafu Senior High and Tech");
        list.push( "Alavanyo Senior High and Tech");
        list.push( "E P Senior High");
        list.push( "E P Trades Trg Center");
        list.push( "Have Tech Inst");
        list.push( "Likpe Senior High");
        list.push( "St Marys Sem and Senior High");
        list.push( "Baglo Ridge Senior High and Tech");
        list.push( "Bueman Senior High");
        list.push( "Fr Dogli Memorial Voc Technical");
        list.push( "Okadjakrom Senior High and Tech");
        list.push( "Ahamansu Islamic Senior High School");
        list.push( "Dodi-Papase Senior High and Tech");
        list.push( "Kadjebi-Asato Senior High");
        list.push( "Anlo Afiadenyigba Senior High");
        list.push( "Anlo Awomefia Senior High");
        list.push( "Anlo Tech Inst");
        list.push( "Atiavi Senior High and Tech");
        list.push( "Keta Business Senior High");
        list.push( "Keta Senior High");
        list.push( "Tsiame Senior High");
        list.push( "Zion Senior High");
        list.push( "Afife Senior High Tech");
        list.push( "Dzodze Penyi Senior High");
        list.push( "Weta Senior High School");
        list.push( "Wovenu Senior High Technical");
        list.push( "Klikor Senior High and Tech");
        list.push( "St Pauls Senior High");
        list.push( "Three Town Senior High");
        list.push( "Bishop Herman Senior High");
        list.push( "C Y O Voc Trg Inst");
        list.push( "Kpando Senior High");
        list.push( "Kpando Tech Inst");
        list.push( "Asukawkaw Senior High");
        list.push( "Oti Senior High and Tech Sch");
        list.push( "YABRAM COMM DAY SENIOR HIGH SCHOOL");
        list.push( "Chinderi Comm SeniorHigh");
        list.push( "Abor Senior High");
        list.push( "Anlo Senior High");
        list.push( "Kete Krachi Senior High and Tech");
        list.push( "Krachi Senior High");
        list.push( "Kpassa Senior High");
        list.push( "Ave Senior High");
        list.push( "Nkwanta Comm Senior High");
        list.push( "Nkwanta Senior High");
        list.push( "Ntruboman Senior High");
        list.push( "Anfoega Senior High");
        list.push( "Vakpo Senior High");
        list.push( "Vakpo Senior High and Technical");
        list.push( "Aveyime Battor Senior High and Tech");
        list.push( "Battor Senior High");
        list.push( "Dorfor Senior High");
        list.push( "Mepe St Kizito Senior High and Tech");
        list.push( "Volo Comm Senior High");
        list.push( "Kpeve Senior High");
        list.push( "Peki Senior High");
        list.push( "Peki Senior High and Technical");
        list.push( "Some Senior High");
        list.push( "Tongor Senior High Technical");
        list.push( "Comboni Tech and Voc");
        list.push( "Dabala Senior High and Tech");
        list.push( "Sogakope Senior High");
        list.push( "St Catherine Girls Senior High");
        list.push( "Baidoo Bonso Senior High and Tech");
        list.push( "SANKOR COMM DAY SENIOR HIGH");
        list.push( "St Marys Boys Senior High");
        list.push( "Nana Brentu Senior High and Tech");
        list.push( "Adjoafua Community Senior High");
        list.push( "Bia Senior High and Tech");
        list.push( "Bibiani Senior High and Tech");
        list.push( "CHIRANO COMM DAY SENIOR HIGH");
        list.push( "Queens Girls Senior High");
        list.push( "Sefwi Bekwai Senior High");
        list.push( "Bodi Senior High");
        list.push( "Annor Adjaye Senior High");
        list.push( "Bonzo_Kaku Senior High");
        list.push( "Esiama Senior High and Tech");
        list.push( "Kikam Tech Inst");
        list.push( "Nkroful Agric Senior High");
        list.push( "Uthman Bin Afam SHS");
        list.push( "Half Assini Senior High");
        list.push( "Daboase Senior High and Tech");
        list.push( "Mpohor Senior High");
        list.push( "Axim Girls Senior High");
        list.push( "Jwiraman Comm Senior High");
        list.push( "Nsein Senior High");
        list.push( "Huni Valley Senior High");
        list.push( "Prestea Senior High and Tech");
        list.push( "St Augustines Senior High");
        list.push( "Akontombra Senior High");
        list.push( "Nsawora Edumafa Comm Senior High School");
        list.push( "Juaboso Senior High");
        list.push( "Asawinso Senior High");
        list.push( "Sefwi-Wiawso Senior High");
        list.push( "Sefwi-Wiawso Senior High and Tech");
        list.push( "St Joseph Senior High");
        list.push( "Takoradi Senior High");
        list.push( "Adiembra Senior High");
        list.push( "Archbishop Porter Girls Snr High");
        list.push( "Bompeh Senior High and Tech");
        list.push( "Diabene Senior High and Tech");
        list.push( "Fijai Senior High");
        list.push( "Ghana Senior High and Tech");
        list.push( "Methodist Senior High");
        list.push( "Sekondi College");
        list.push( "St Johns Senior High");
        list.push( "Takoradi Tech Inst");
        list.push( "Ahantaman Girls Senior High");
        list.push( "Shama Senior High");
        list.push( "Dadieso Senior High");
        list.push( "Benso Senior High and Tech");
        list.push( "Fiaseman Senior High");
        list.push( "Tarkwa Senior High");
        list.push( "MANSO-AMENFI SENIOR HIGH");
        list.push( "Amenfiman Senior High");
        list.push( "Asankrangwa Senior High");
        list.push( "Asankrangwa Senior High and Tech");
        list.push( "Presbyterian Boys Senior High Legon");

        return list;
    }


    apiToAppDate(params) {

        var vDate = (params).split("T");
        
        vDate = vDate[0].split("-")
        
        var dDate = vDate[2] + "/" + vDate[1] + "/" + vDate[0]
        
        return dDate
    }

    convertDateForPicker(tima){
        var params = ""
        params =  tima+""
        //Sun Mar 01 2015 00:00:00 GMT+0000 (GMT)
        
        var date = (params+"").split(" ");
        var day = date[2];
        var month = date[1];
        
        var year = date[3]+""
        if(month.toLowerCase()==="jan"){
            month = "01"
        }else if(month.toLowerCase()==="feb"){
            month = "02"
        }else if(month.toLowerCase()==="mar"){
            month = "03"
        }else if(month.toLowerCase()==="apr"){
            month = "04"
        }else if(month.toLowerCase()==="may"){
            month = "05"
        }else if(month.toLowerCase()==="jun"){
            month = "06"
        }else if(month.toLowerCase()==="jul"){
            month = "07"
        }else if(month.toLowerCase()==="aug"){
            month = "08"
        }else if(month.toLowerCase()==="sep"){
            month = "09"
        }else if(month.toLowerCase()==="oct"){
            month = "10"
        }else if(month.toLowerCase()==="nov"){
            month = "11"
        }else if(month.toLowerCase()==="dec"){
            month = "12"
        }
        
        var full = year+"/"+month+"/"+day
       // alert(full)
        return full

    }

    apptoApiDate(params){
        params = params+""
       var  vDate = params.split("/")
        
        var dDate = vDate[2] + "-" + vDate[1] + "-" + vDate[0]
        
        return dDate
    }

    last6MthsDate(){
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var year = now.getFullYear() 
        
        if(month<7){
            month = month-0+6
            year = year-1
        }else{
            month = month-6
        }
        var last6MthDate = day+"/"+month+"/"+year

        return last6MthDate
    }

    currentDate(){
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var year = now.getFullYear() 
        var toDate = day+"/"+month+"/"+year
        

        return toDate
    }

    currentDateApp(){
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var year = now.getFullYear() 
        var toDate = year+"-"+month+"-"+year+"T00:00:00.000Z"
        

        return toDate
    }

    currentDateWithTime(){
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var year = now.getFullYear() 
        var toDate = day+"-"+month+"-"+year+"T00:00:00.000Z"
        

        return toDate
    }

    //"2020-01-08T00:00:00.000Z"

    getLocation(){
        var locationInfo = "18.8578979,78.5453245,12z'"

        return locationInfo
    }

    getDevice(){
        var deviceInfo = "sometestingstuffstringsgohere"

        return deviceInfo
    }

    convertDateForPicker(params){
        //Sun Mar 01 2015 00:00:00 GMT+0000 (GMT)
        
        var date = (params+"").split(" ");
        var day = date[2];
        var month = date[1];
        
        var year = date[3]+""
        if(month.toLowerCase()==="jan"){
            month = "01"
        }else if(month.toLowerCase()==="feb"){
            month = "02"
        }else if(month.toLowerCase()==="mar"){
            month = "03"
        }else if(month.toLowerCase()==="apr"){
            month = "04"
        }else if(month.toLowerCase()==="may"){
            month = "05"
        }else if(month.toLowerCase()==="jun"){
            month = "06"
        }else if(month.toLowerCase()==="jul"){
            month = "07"
        }else if(month.toLowerCase()==="aug"){
            month = "08"
        }else if(month.toLowerCase()==="sep"){
            month = "09"
        }else if(month.toLowerCase()==="oct"){
            month = "10"
        }else if(month.toLowerCase()==="nov"){
            month = "11"
        }else if(month.toLowerCase()==="dec"){
            month = "12"
        }
        
        var full = day+"/"+month+"/"+year

        return full

    }

    convertGrade(grade){
        if(grade.includes("/")){
            var arrGrade = grade.split("/")
            var fGrade = (100*(arrGrade[0]/arrGrade[1])).toFixed(2)

            return fGrade
        }else{
            return grade
        }
    }

    getLastPart(filePath, seperator){
        var arrPath = filePath.split(seperator)
        var sizePath = arrPath.length
        return arrPath[sizePath-1]
    }

    getfilename(params){
        var mName = params.split("/")
        var mSize = mName.length 
        var lPart = mName[mSize-1].split(".")
        return lPart[0]
    }

    getDateForScreen( date){
        var nDate = date.split("/")
        var oDate = "01/01/1990"

        if(nDate.length>=3){
             oDate = nDate[1]+"/"+nDate[0]+"/"+nDate[2]

           
        }
        console.log(nDate.length)
        return new Date(oDate)
    }

}

export default utils;
