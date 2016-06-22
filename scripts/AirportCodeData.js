//US Airport Code JSON from IATA data
var source = [
  {
    "name":"Birmingham International Airport",
    "code":"BHM"
  },
  {
    "name":"Dothan Regional Airport",
    "code":"DHM"
  },
  {
    "name":"Huntsville International Airport",
    "code":"HSV"
  },
  {
    "name":"Mobile",
    "code":"MOB"
  },
  {
    "name":"Montgomery",
    "code":"MGM"
  },
  {
    "name":"Anchorage International Airport",
    "code":"ANC"
  },
  {
    "name":"Fairbanks International Airport",
    "code":"FAI"
  },
  {
    "name":"Juneau International Airport",
    "code":"JNU"
  },
  {
    "name":"Flagstaff",
    "code":"FLG"
  },
  {
    "name":"Phoenix, Phoenix Sky Harbor International Airport",
    "code":"PHX"
  },
  {
    "name":"Tucson International Airport",
    "code":"TUS"
  },
  {
    "name":"Yuma International Airport",
    "code":"YUM"
  },
  {
    "name":"Fayetteville",
    "code":"FYV"
  },
  {
    "name":"Little Rock National Airport",
    "code":"LIT"
  },
  {
    "name":"Burbank",
    "code":"BUR"
  },
  {
    "name":"Fresno",
    "code":"FAT"
  },
  {
    "name":"Long Beach",
    "code":"LGB"
  },
  {
    "name":"Los Angeles International Airport",
    "code":"LAX"
  },
  {
    "name":"Oakland",
    "code":"OAK"
  },
  {
    "name":"Ontario",
    "code":"ONT"
  },
  {
    "name":"Palm Springs",
    "code":"PSP"
  },
  {
    "name":"Sacramento",
    "code":"SMF"
  },
  {
    "name":"San Diego",
    "code":"SAN"
  },
  {
    "name":"San Francisco International Airport",
    "code":"SFO"
  },
  {
    "name":"San Jose",
    "code":"SJC"
  },
  {
    "name":"Santa Ana",
    "code":"SNA"
  },
  {
    "name":"Aspen",
    "code":"ASE"
  },
  {
    "name":"Colorado Springs",
    "code":"COS"
  },
  {
    "name":"Denver International Airport",
    "code":"DEN"
  },
  {
    "name":"Grand Junction",
    "code":"GJT"
  },
  {
    "name":"Pueblo",
    "code":"PUB"
  },
  {
    "name":"Hartford",
    "code":"BDL"
  },
  {
    "name":"Washington, Dulles International Airport",
    "code":"IAD"
  },
  {
    "name":"Washington National Airport",
    "code":"DCA"
  },
  {
    "name":"Daytona Beach",
    "code":"DAB"
  },
  {
    "name":"Fort Lauderdale-Hollywood International Airport",
    "code":"FLL"
  },
  {
    "name":"Fort Meyers",
    "code":"RSW"
  },
  {
    "name":"Jacksonville",
    "code":"JAX"
  },
  {
    "name":"Miami International Airport",
    "code":"MIA"
  },
  {
    "name":"Orlando",
    "code":"MCO"
  },
  {
    "name":"Pensacola",
    "code":"PNS"
  },
  {
    "name":"St. Petersburg",
    "code":"PIE"
  },
  {
    "name":"Sarasota",
    "code":"SRQ"
  },
  {
    "name":"Tampa",
    "code":"TPA"
  },
  {
    "name":"West Palm Beach",
    "code":"PBI"
  },
  {
    "name":"Panama City-Bay County International Airport",
    "code":"PFN"
  },
  {
    "name":"Atlanta Hartsfield International Airport",
    "code":"ATL"
  },
  {
    "name":"Augusta",
    "code":"AGS"
  },
  {
    "name":"Savannah",
    "code":"SAV"
  },
  {
    "name":"Hilo",
    "code":"ITO"
  },
  {
    "name":"Honolulu International Airport",
    "code":"HNL"
  },
  {
    "name":"Kahului",
    "code":"OGG"
  },
  {
    "name":"Kailua",
    "code":"KOA"
  },
  {
    "name":"Lihue",
    "code":"LIH"
  },
  {
    "name":"Boise",
    "code":"BOI"
  },
  {
    "name":"Chicago Midway Airport",
    "code":"MDW"
  },
  {
    "name":"Chicago, O'Hare International Airport Airport",
    "code":"ORD"
  },
  {
    "name":"Moline",
    "code":"MLI"
  },
  {
    "name":"Peoria",
    "code":"PIA"
  },
  {
    "name":"Evansville",
    "code":"EVV"
  },
  {
    "name":"Fort Wayne",
    "code":"FWA"
  },
  {
    "name":"Indianapolis International Airport",
    "code":"IND"
  },
  {
    "name":"South Bend",
    "code":"SBN"
  },
  {
    "name":"Cedar Rapids",
    "code":"CID"
  },
  {
    "name":"Des Moines",
    "code":"DSM"
  },
  {
    "name":"Wichita",
    "code":"ICT"
  },
  {
    "name":"Lexington",
    "code":"LEX"
  },
  {
    "name":"Louisville",
    "code":"SDF"
  },
  {
    "name":"Baton Rouge",
    "code":"BTR"
  },
  {
    "name":"New Orleans International Airport",
    "code":"MSY"
  },
  {
    "name":"Shreveport",
    "code":"SHV"
  },
  {
    "name":"Augusta",
    "code":"AUG"
  },
  {
    "name":"Bangor",
    "code":"BGR"
  },
  {
    "name":"Portland",
    "code":"PWM"
  },
  {
    "name":"Baltimore",
    "code":"BWI"
  },
  {
    "name":"Boston, Logan International Airport",
    "code":"BOS"
  },
  {
    "name":"Hyannis",
    "code":"HYA"
  },
  {
    "name":"Nantucket",
    "code":"ACK"
  },
  {
    "name":"Worcester",
    "code":"ORH"
  },
  {
    "name":"Battlecreek",
    "code":"BTL"
  },
  {
    "name":"Detroit Metropolitan Airport",
    "code":"DTW"
  },
  {
    "name":"Detroit",
    "code":"DET"
  },
  {
    "name":"Flint",
    "code":"FNT"
  },
  {
    "name":"Grand Rapids",
    "code":"GRR"
  },
  {
    "name":"Kalamazoo-Battle Creek International Airport",
    "code":"AZO"
  },
  {
    "name":"Lansing",
    "code":"LAN"
  },
  {
    "name":"Saginaw",
    "code":"MBS"
  },
  {
    "name":"Duluth",
    "code":"DLH"
  },
  {
    "name":"Minneapolis/St.Paul International Airport",
    "code":"MSP"
  },
  {
    "name":"Rochester",
    "code":"RST"
  },
  {
    "name":"Gulfport",
    "code":"GPT"
  },
  {
    "name":"Jackson",
    "code":"JAN"
  },
  {
    "name":"Kansas City",
    "code":"MCI"
  },
  {
    "name":"St Louis, Lambert International Airport",
    "code":"STL"
  },
  {
    "name":"Springfield",
    "code":"SGF"
  },
  {
    "name":"Billings",
    "code":"BIL"
  },
  {
    "name":"Lincoln",
    "code":"LNK"
  },
  {
    "name":"Omaha",
    "code":"OMA"
  },
  {
    "name":"Las Vegas, Las Vegas McCarran International Airport",
    "code":"LAS"
  },
  {
    "name":"Reno-Tahoe International Airport",
    "code":"RNO"
  },
  {
    "name":"Manchester",
    "code":"MHT"
  },
  {
    "name":"Atlantic City International Airport",
    "code":"ACY"
  },
  {
    "name":"Newark International Airport",
    "code":"EWR"
  },
  {
    "name":"Trenton",
    "code":"TTN"
  },
  {
    "name":"Albuquerque International Airport",
    "code":"ABQ"
  },
  {
    "name":"Alamogordo",
    "code":"ALM"
  },
  {
    "name":"Albany International Airport",
    "code":"ALB"
  },
  {
    "name":"Buffalo",
    "code":"BUF"
  },
  {
    "name":"Islip",
    "code":"ISP"
  },
  {
    "name":"New York, John F Kennedy International Airport",
    "code":"JFK"
  },
  {
    "name":"New York, La Guardia Airport",
    "code":"LGA"
  },
  {
    "name":"Newburgh",
    "code":"SWF"
  },
  {
    "name":"Rochester",
    "code":"ROC"
  },
  {
    "name":"Syracuse",
    "code":"SYR"
  },
  {
    "name":"Westchester",
    "code":"HPN"
  },
  {
    "name":"Asheville",
    "code":"AVL"
  },
  {
    "name":"Charlotte/Douglas International Airport",
    "code":"CLT"
  },
  {
    "name":"Fayetteville",
    "code":"FAY"
  },
  {
    "name":"Greensboro",
    "code":"GSO"
  },
  {
    "name":"Raleigh",
    "code":"RDU"
  },
  {
    "name":"Winston-Salem",
    "code":"INT"
  },
  {
    "name":"Bismark",
    "code":"BIS"
  },
  {
    "name":"Fargo",
    "code":"FAR"
  },
  {
    "name":"Akron",
    "code":"CAK"
  },
  {
    "name":"Cincinnati",
    "code":"CVG"
  },
  {
    "name":"Cleveland",
    "code":"CLE"
  },
  {
    "name":"Columbus",
    "code":"CMH"
  },
  {
    "name":"Dayton",
    "code":"DAY"
  },
  {
    "name":"Toledo",
    "code":"TOL"
  },
  {
    "name":"Oklahoma City",
    "code":"OKC"
  },
  {
    "name":"Tulsa",
    "code":"TUL"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Eugene",
    "code":"EUG"
  },
  {
    "name":"Portland International Airport",
    "code":"PDX"
  },
  {
    "name":"Portland, Hillsboro Airport",
    "code":"HIO"
  },
  {
    "name":"Salem",
    "code":"SLE"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Allentown",
    "code":"ABE"
  },
  {
    "name":"Erie",
    "code":"ERI"
  },
  {
    "name":"Harrisburg",
    "code":"MDT"
  },
  {
    "name":"Philadelphia",
    "code":"PHL"
  },
  {
    "name":"Pittsburgh",
    "code":"PIT"
  },
  {
    "name":"Scranton",
    "code":"AVP"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Providence - T.F. Green Airport",
    "code":"PVD"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Charleston",
    "code":"CHS"
  },
  {
    "name":"Columbia",
    "code":"CAE"
  },
  {
    "name":"Greenville",
    "code":"GSP"
  },
  {
    "name":"Myrtle Beach",
    "code":"MYR"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Pierre",
    "code":"PIR"
  },
  {
    "name":"Rapid City",
    "code":"RAP"
  },
  {
    "name":"Sioux Falls",
    "code":"FSD"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Bristol",
    "code":"TRI"
  },
  {
    "name":"Chattanooga",
    "code":"CHA"
  },
  {
    "name":"Knoxville",
    "code":"TYS"
  },
  {
    "name":"Memphis",
    "code":"MEM"
  },
  {
    "name":"Nashville",
    "code":"BNA"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Amarillo",
    "code":"AMA"
  },
  {
    "name":"Austin Bergstrom International Airport",
    "code":"AUS"
  },
  {
    "name":"Corpus Christi",
    "code":"CRP"
  },
  {
    "name":"Dallas Love Field Airport",
    "code":"DAL"
  },
  {
    "name":"Dallas/Fort Worth International Airport",
    "code":"DFW"
  },
  {
    "name":"El Paso",
    "code":"ELP"
  },
  {
    "name":"Houston, William B Hobby Airport",
    "code":"HOU"
  },
  {
    "name":"Houston, George Bush Intercontinental Airport",
    "code":"IAH"
  },
  {
    "name":"Lubbock",
    "code":"LBB"
  },
  {
    "name":"Midland",
    "code":"MAF"
  },
  {
    "name":"San Antonio International Airport",
    "code":"SAT"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Salt Lake City",
    "code":"SLC"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Burlington",
    "code":"BTV"
  },
  {
    "name":"Montpelier",
    "code":"MPV"
  },
  {
    "name":"Rutland",
    "code":"RUT"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Dulles",
    "code":"IAD"
  },
  {
    "name":"Newport News",
    "code":"PHF"
  },
  {
    "name":"Norfolk",
    "code":"ORF"
  },
  {
    "name":"Richmond",
    "code":"RIC"
  },
  {
    "name":"Roanoke",
    "code":"ROA"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Pasco, Pasco/Tri-Cities Airport",
    "code":"PSC"
  },
  {
    "name":"Seattle, Tacoma International Airport",
    "code":"SEA"
  },
  {
    "name":"Spokane International Airport",
    "code":"GEG"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Charleston",
    "code":"CRW"
  },
  {
    "name":"Clarksburg",
    "code":"CKB"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Green Bay",
    "code":"GRB"
  },
  {
    "name":"Madison",
    "code":"MSN"
  },
  {
    "name":"Milwaukee",
    "code":"MKE"
  },
  {
    "name":"",
    "code":""
  },
  {
    "name":"Casper",
    "code":"CPR"
  },
  {
    "name":"Cheyenne",
    "code":"CYS"
  },
  {
    "name":"Jackson Hole",
    "code":"JAC"
  },
  {
    "name":"Rock Springs",
    "code":"RKS"
  }
]