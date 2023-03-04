import React from "react";
import { useState, useEffect } from "react";
import FlatList from "flatlist-react";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import "./Cardslist.css";

const mydata = {
  results: [
    {
      gender: "female",
      name: { title: "Ms", first: "Grace", last: "Kumar" },
      location: { street: { number: 4724, name: "South Eastern Highway" }, city: "Gisborne", state: "Nelson", country: "New Zealand", postcode: 73047, coordinates: { latitude: "47.9233", longitude: "58.9318" }, timezone: { offset: "-2:00", description: "Mid-Atlantic" } },
      email: "grace.kumar@example.com",
      login: { uuid: "56f67c37-bf81-430c-82b5-ceca103ef8d8", username: "greenrabbit902", password: "ravens", salt: "8GeocXsk", md5: "70e98dd0c9e1090fbe71f2bd35ecebcd", sha1: "73ffe34b249e80eaa4574318206fd8f4f12cbbf3", sha256: "fb31a775266f2e679fb17ca1d5da34ed0f44a8c0d8d6feb9f4ca48464beb0fb2" },
      dob: { date: "1990-10-04T17:50:28.616Z", age: 31 },
      registered: { date: "2015-06-09T13:39:11.571Z", age: 7 },
      phone: "(029)-958-5908",
      cell: "(609)-699-8111",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/10.jpg", medium: "https://randomuser.me/api/portraits/med/women/10.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/10.jpg" },
      nat: "NZ",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Scarlett", last: "Turner" },
      location: { street: { number: 3583, name: "Mt Albert Road" }, city: "Tauranga", state: "Gisborne", country: "New Zealand", postcode: 40659, coordinates: { latitude: "89.0559", longitude: "-164.8886" }, timezone: { offset: "+9:30", description: "Adelaide, Darwin" } },
      email: "scarlett.turner@example.com",
      login: { uuid: "da0faefc-222c-49ec-be58-c350747f0d89", username: "bluebutterfly719", password: "morgan", salt: "bBpB7a2I", md5: "22483f16976cd4b7e1c3ba1e81a77bbd", sha1: "33f79df74e9b19b1bf52f2e9f587792ae6304902", sha256: "5ac4aeb50b434c42cce20bde8e80a1fb0a3f10f26a736b15168411ad8b50012c" },
      dob: { date: "1968-03-14T18:02:20.683Z", age: 54 },
      registered: { date: "2005-04-08T15:01:13.077Z", age: 17 },
      phone: "(117)-396-2339",
      cell: "(564)-790-8075",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/20.jpg", medium: "https://randomuser.me/api/portraits/med/women/20.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg" },
      nat: "NZ",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Daniel", last: "Lampinen" },
      location: { street: { number: 5792, name: "Rotuaari" }, city: "Jämijärvi", state: "Ostrobothnia", country: "Finland", postcode: 52865, coordinates: { latitude: "-55.4097", longitude: "-145.7746" }, timezone: { offset: "-10:00", description: "Hawaii" } },
      email: "daniel.lampinen@example.com",
      login: { uuid: "b62312b5-ea46-45e8-a7be-0d0c8532719b", username: "tinyfrog300", password: "6669", salt: "bjPCXPFl", md5: "136365ccf149bce45f1b3a4d7ec24377", sha1: "0c5c3cd3f32a12f436e005237731dd8cda25a825", sha256: "3eb62d731503fcfd4402cf00e3c6081d9b1dadfd903c3200f5d5c5791d04f616" },
      dob: { date: "1981-08-10T11:27:57.869Z", age: 41 },
      registered: { date: "2015-08-28T06:09:36.028Z", age: 7 },
      phone: "02-084-823",
      cell: "041-149-24-57",
      id: { name: "HETU", value: "NaNNA123undefined" },
      picture: { large: "https://randomuser.me/api/portraits/men/29.jpg", medium: "https://randomuser.me/api/portraits/med/men/29.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg" },
      nat: "FI",
    },
    {
      gender: "male",
      name: { title: "Monsieur", first: "Mehmet", last: "Mercier" },
      location: { street: { number: 6957, name: "Rue Gasparin" }, city: "Leimbach (Ag)", state: "Glarus", country: "Switzerland", postcode: 5078, coordinates: { latitude: "-52.2904", longitude: "1.9774" }, timezone: { offset: "-10:00", description: "Hawaii" } },
      email: "mehmet.mercier@example.com",
      login: { uuid: "702a7ca8-30e5-43aa-800d-7d45227f478b", username: "sadostrich892", password: "dinosaur", salt: "bqfpaoG7", md5: "b9fc69f7e1bbc82f3d691f82051274cd", sha1: "064429aa263cb81030fad698caaa59b1a8162eea", sha256: "1c6f0f26a1e314c011361e4b1dfa55250e5f5207f1561dc58d80c3c9801a353e" },
      dob: { date: "1978-06-25T17:46:37.512Z", age: 44 },
      registered: { date: "2009-06-25T16:12:44.455Z", age: 13 },
      phone: "079 612 24 86",
      cell: "076 813 96 70",
      id: { name: "AVS", value: "756.1958.3609.76" },
      picture: { large: "https://randomuser.me/api/portraits/men/83.jpg", medium: "https://randomuser.me/api/portraits/med/men/83.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg" },
      nat: "CH",
    },
    {
      gender: "female",
      name: { title: "Ms", first: "Gabrielle", last: "Fortin" },
      location: { street: { number: 7629, name: "Dundas Rd" }, city: "Odessa", state: "Yukon", country: "Canada", postcode: "E0Q 4Z1", coordinates: { latitude: "-58.9306", longitude: "-101.6531" }, timezone: { offset: "+3:00", description: "Baghdad, Riyadh, Moscow, St. Petersburg" } },
      email: "gabrielle.fortin@example.com",
      login: { uuid: "326aa1be-75e0-4414-838f-4bae95d7da24", username: "lazylion604", password: "1987", salt: "wj0YRW8A", md5: "c881745126ce7bbb3cd6fbbb14b538cf", sha1: "1cc5b55190824c6d79ba67052d43bc6fb54819bc", sha256: "3df5588010287acd03bc6da4b1e7e01cb16e0a2c32a3726bb01ae88085db9e0a" },
      dob: { date: "1969-08-07T01:29:42.510Z", age: 53 },
      registered: { date: "2004-08-10T11:55:16.990Z", age: 18 },
      phone: "L37 B20-1503",
      cell: "H28 L64-6888",
      id: { name: "SIN", value: "832079149" },
      picture: { large: "https://randomuser.me/api/portraits/women/71.jpg", medium: "https://randomuser.me/api/portraits/med/women/71.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg" },
      nat: "CA",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Juciele", last: "da Mata" },
      location: { street: { number: 5209, name: "Rua Paraíba " }, city: "Canoas", state: "Rio de Janeiro", country: "Brazil", postcode: 83414, coordinates: { latitude: "-36.8847", longitude: "-35.7427" }, timezone: { offset: "+9:30", description: "Adelaide, Darwin" } },
      email: "juciele.damata@example.com",
      login: { uuid: "ea6d36ea-c01f-48e6-a1fb-92f74c8c7ae2", username: "greenmouse421", password: "doghouse", salt: "RjkiczXf", md5: "71ea357ecbc18ea4f6b7bb71542c0f23", sha1: "5ae4d0d31b1ee16c18dab5f264d38f0d4881eab6", sha256: "7cdbe68fe90fac540e930b9a4f7ca4b864c1101c74b8bdd865fc275a043b26a3" },
      dob: { date: "1978-06-12T05:57:29.609Z", age: 44 },
      registered: { date: "2009-08-05T17:40:17.435Z", age: 13 },
      phone: "(53) 0429-2664",
      cell: "(77) 2600-2775",
      id: { name: "CPF", value: "870.363.922-55" },
      picture: { large: "https://randomuser.me/api/portraits/women/1.jpg", medium: "https://randomuser.me/api/portraits/med/women/1.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg" },
      nat: "BR",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Afşar", last: "Dizdar" },
      location: { street: { number: 5414, name: "Bağdat Cd" }, city: "Yozgat", state: "Kırıkkale", country: "Turkey", postcode: 67344, coordinates: { latitude: "-24.2342", longitude: "-126.7514" }, timezone: { offset: "+9:00", description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk" } },
      email: "afsar.dizdar@example.com",
      login: { uuid: "fcbcf608-9871-4b74-b030-280444d6a7ad", username: "blackgorilla609", password: "icu812", salt: "v8tR71UN", md5: "cd94054157b01fc6c5b9aeceef13c5f9", sha1: "7df07b92cd403f1d8b6a568619cb6d999cfa3897", sha256: "3d0a62679d3bf5843f9cc74b68ad1339588f2fbf32efd29a91241d77a171bd3b" },
      dob: { date: "1989-12-06T04:08:58.718Z", age: 32 },
      registered: { date: "2011-05-13T03:29:24.860Z", age: 11 },
      phone: "(642)-850-0566",
      cell: "(023)-588-6869",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/19.jpg", medium: "https://randomuser.me/api/portraits/med/women/19.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg" },
      nat: "TR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Albert", last: "Furuseth" },
      location: { street: { number: 4366, name: "Bukken Bruses vei" }, city: "Avaldsnes", state: "Description", country: "Norway", postcode: "7391", coordinates: { latitude: "63.1956", longitude: "123.5455" }, timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" } },
      email: "albert.furuseth@example.com",
      login: { uuid: "088c6142-9cf0-403e-988c-641be26f21a6", username: "redrabbit764", password: "cinder", salt: "O8ZGUdWc", md5: "1e485f3b8069f6725adfe160cf3abe94", sha1: "ff207721d394af965b65501925aca90a28b9ee0f", sha256: "f028b22c8cae9d59887847e66e9a93aa1aab350907555b07bafd8c10fc9bd223" },
      dob: { date: "1951-05-30T04:05:27.013Z", age: 71 },
      registered: { date: "2009-10-28T10:28:24.390Z", age: 12 },
      phone: "22945733",
      cell: "49035707",
      id: { name: "FN", value: "30055135505" },
      picture: { large: "https://randomuser.me/api/portraits/men/41.jpg", medium: "https://randomuser.me/api/portraits/med/men/41.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/41.jpg" },
      nat: "NO",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Nataliya", last: "Shklyarenko" },
      location: { street: { number: 9045, name: "Listopadniy provulok" }, city: "Slavutich", state: "Dnipropetrovska", country: "Ukraine", postcode: 65049, coordinates: { latitude: "83.9848", longitude: "-130.1841" }, timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" } },
      email: "nataliya.shklyarenko@example.com",
      login: { uuid: "1f843e87-3bdb-4222-86c1-46a595095064", username: "angrymouse315", password: "orion1", salt: "bqibK0dt", md5: "720e02b5b7ab3665704cb68f108e41fd", sha1: "d0f62d63767aca457ca47304c5cbfb184fc941be", sha256: "247996d515870a23bfa2af97e94e298c4c02727f5217faec2309c6f89949cd21" },
      dob: { date: "1954-10-11T11:18:26.307Z", age: 67 },
      registered: { date: "2022-04-28T05:23:20.846Z", age: 0 },
      phone: "(097) J62-3478",
      cell: "(098) J26-2244",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/96.jpg", medium: "https://randomuser.me/api/portraits/med/women/96.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/96.jpg" },
      nat: "UA",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Mathilda", last: "Furu" },
      location: { street: { number: 6520, name: "Byveien" }, city: "Namsos", state: "Telemark", country: "Norway", postcode: "0032", coordinates: { latitude: "84.4909", longitude: "-100.8497" }, timezone: { offset: "+9:00", description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk" } },
      email: "mathilda.furu@example.com",
      login: { uuid: "aa6cc4b0-04bc-48db-8595-e3498ed148e8", username: "yellowcat337", password: "sabine", salt: "FByp2jj4", md5: "86f80073139ddd6cb69f56cf5016aac0", sha1: "41174aeb3018f4cccfc058e7797137522e98c15e", sha256: "6c4b68867408164eda89c556867c1dfcd2fb67963dd6490c5e94d59b55b05e95" },
      dob: { date: "1963-10-13T16:37:37.843Z", age: 58 },
      registered: { date: "2005-04-06T20:22:07.296Z", age: 17 },
      phone: "82858408",
      cell: "99387546",
      id: { name: "FN", value: "13106328018" },
      picture: { large: "https://randomuser.me/api/portraits/women/49.jpg", medium: "https://randomuser.me/api/portraits/med/women/49.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg" },
      nat: "NO",
    },
    {
      gender: "female",
      name: { title: "Ms", first: "Vladlena", last: "Virskiy" },
      location: { street: { number: 3163, name: "Proyizd Kriva Lipa" }, city: "Izyaslav", state: "Ivano-Frankivska", country: "Ukraine", postcode: 23766, coordinates: { latitude: "56.5127", longitude: "115.2054" }, timezone: { offset: "-4:00", description: "Atlantic Time (Canada), Caracas, La Paz" } },
      email: "vladlena.virskiy@example.com",
      login: { uuid: "ea5f5bfd-ca72-469c-b3a6-3d91189a1458", username: "happywolf891", password: "rainman", salt: "wzbkP1EU", md5: "d942fcfc435619bbd325aa1ab17dacbe", sha1: "a6fab5c2dd647d8c74c693b7ec0c02d732418677", sha256: "42bfe0f7e1dd24b2296f616ca79d3b69225bf2bda83d6b2705787ba531814ae2" },
      dob: { date: "1971-04-08T04:00:19.307Z", age: 51 },
      registered: { date: "2004-01-31T18:32:52.470Z", age: 18 },
      phone: "(099) D65-8605",
      cell: "(068) O20-1582",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/14.jpg", medium: "https://randomuser.me/api/portraits/med/women/14.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg" },
      nat: "UA",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Troyana", last: "Monastireckiy" },
      location: { street: { number: 2326, name: "Novoznesenska" }, city: "Reni", state: "Volinska", country: "Ukraine", postcode: 20769, coordinates: { latitude: "65.9834", longitude: "133.3808" }, timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" } },
      email: "troyana.monastireckiy@example.com",
      login: { uuid: "adafb203-0610-43da-bd8b-0c03acb16604", username: "sadfrog175", password: "hohoho", salt: "UEfXLCAs", md5: "5f39e6a15d13dbc07eb1ca926967139e", sha1: "884aa3b4fe85313232ca47bc19ae5b932c37a180", sha256: "f8aff785cdd184138243e081a64d5b15cce353265a19d9e6dd44166986c973f8" },
      dob: { date: "1954-11-30T16:09:16.508Z", age: 67 },
      registered: { date: "2016-12-25T02:56:46.455Z", age: 5 },
      phone: "(096) V35-4929",
      cell: "(067) Y76-9930",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/42.jpg", medium: "https://randomuser.me/api/portraits/med/women/42.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg" },
      nat: "UA",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Eugenio", last: "Arias" },
      location: { street: { number: 9292, name: "Calle de La Almudena" }, city: "Cartagena", state: "Castilla y León", country: "Spain", postcode: 64326, coordinates: { latitude: "84.5868", longitude: "-2.1170" }, timezone: { offset: "-7:00", description: "Mountain Time (US & Canada)" } },
      email: "eugenio.arias@example.com",
      login: { uuid: "9b651f15-8b0b-44ce-b9f1-ce8c2904209f", username: "silvermouse940", password: "nostromo", salt: "jONoORhI", md5: "c8cd44debc6f2a0d2e9c078b1da663f0", sha1: "3659a84350446efc735238dd1bdecf4ad54f93be", sha256: "7006b0aff26ebda3ebd22b2af325c228ecb392ae1db01f6c09d427837496fece" },
      dob: { date: "1978-08-09T22:24:59.163Z", age: 44 },
      registered: { date: "2020-08-19T14:52:08.927Z", age: 2 },
      phone: "964-446-358",
      cell: "677-486-621",
      id: { name: "DNI", value: "75538514-W" },
      picture: { large: "https://randomuser.me/api/portraits/men/27.jpg", medium: "https://randomuser.me/api/portraits/med/men/27.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg" },
      nat: "ES",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Alberte", last: "Olsen" },
      location: { street: { number: 1307, name: "Østerskovvej" }, city: "Hammel", state: "Danmark", country: "Denmark", postcode: 88895, coordinates: { latitude: "-80.3938", longitude: "-69.0312" }, timezone: { offset: "-10:00", description: "Hawaii" } },
      email: "alberte.olsen@example.com",
      login: { uuid: "a0a32ffb-5a34-46cd-8539-3376bba39ea1", username: "angrycat712", password: "loveit", salt: "rNprjxbC", md5: "9b64feed50e5c4266797ce0e570333cb", sha1: "03a95a6138717484dfc524d6c7ae3af41989a627", sha256: "3c8708abe18ded26c6de0bb1318f0f8ea91ab8308c4b17dfde3fc4671ddf3ee4" },
      dob: { date: "1994-07-04T00:26:38.261Z", age: 28 },
      registered: { date: "2017-12-18T20:19:31.190Z", age: 4 },
      phone: "59387985",
      cell: "42666200",
      id: { name: "CPR", value: "030794-6525" },
      picture: { large: "https://randomuser.me/api/portraits/women/67.jpg", medium: "https://randomuser.me/api/portraits/med/women/67.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg" },
      nat: "DK",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "بهاره", last: "كامياران" },
      location: { street: { number: 2828, name: "15 خرداد" }, city: "قدس", state: "البرز", country: "Iran", postcode: 79000, coordinates: { latitude: "8.9317", longitude: "103.5056" }, timezone: { offset: "+4:00", description: "Abu Dhabi, Muscat, Baku, Tbilisi" } },
      email: "bhrh.kmyrn@example.com",
      login: { uuid: "08763d22-ecf1-4452-8d3e-8d70dbe5ec87", username: "brownbear906", password: "1q2w3e4r", salt: "FSg2btkR", md5: "66643cae7163f235f3f973a0c7081894", sha1: "d01c5093f17b54afe4453de481dbc0dbc56a2643", sha256: "4e274c0065fed2b9ca10b743dc6fcbfe2811eaccce9074ea83729b05facabc38" },
      dob: { date: "1951-11-28T05:13:05.669Z", age: 70 },
      registered: { date: "2020-11-03T23:23:20.032Z", age: 1 },
      phone: "050-88528459",
      cell: "0913-737-2301",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/90.jpg", medium: "https://randomuser.me/api/portraits/med/women/90.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg" },
      nat: "IR",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Susie", last: "Hale" },
      location: { street: { number: 8290, name: "Richmond Park" }, city: "Killarney", state: "Galway City", country: "Ireland", postcode: 53512, coordinates: { latitude: "35.1780", longitude: "-22.8110" }, timezone: { offset: "-3:00", description: "Brazil, Buenos Aires, Georgetown" } },
      email: "susie.hale@example.com",
      login: { uuid: "0ed32d45-b552-4560-aad7-cb6ee712e1b8", username: "lazybutterfly894", password: "natalie1", salt: "QhMtXyNj", md5: "780179b3e63936f879168f66e90e60fd", sha1: "a1599e710e927270165642b4e85f2ced6e1fbe2f", sha256: "ce20306eff848590938f778bdda945749eec9dfc7f54991670959677a2cf9211" },
      dob: { date: "1992-07-16T03:57:00.597Z", age: 30 },
      registered: { date: "2009-07-23T17:00:10.431Z", age: 13 },
      phone: "051-992-3603",
      cell: "081-034-4812",
      id: { name: "PPS", value: "5016468T" },
      picture: { large: "https://randomuser.me/api/portraits/women/50.jpg", medium: "https://randomuser.me/api/portraits/med/women/50.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg" },
      nat: "IE",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Mareen", last: "Dillmann" },
      location: { street: { number: 9905, name: "Fliederweg" }, city: "Tanna", state: "Hamburg", country: "Germany", postcode: 97802, coordinates: { latitude: "59.7444", longitude: "65.4590" }, timezone: { offset: "+4:00", description: "Abu Dhabi, Muscat, Baku, Tbilisi" } },
      email: "mareen.dillmann@example.com",
      login: { uuid: "18484029-c4fa-4e90-83ab-11b71c97647b", username: "silvergorilla147", password: "benny1", salt: "Ijpe3j2t", md5: "02e7a543d853ccbcc644739f71405cdf", sha1: "d6ec2ce286ae2934c7edd3e10cd35d9e265870a4", sha256: "d3b3ffdcfc9d6adf333e218a6b862ab26ca73465be3328d7a9cd3031401e765f" },
      dob: { date: "1962-10-22T19:29:54.256Z", age: 59 },
      registered: { date: "2018-09-02T10:49:42.923Z", age: 4 },
      phone: "0929-9640613",
      cell: "0170-4410862",
      id: { name: "SVNR", value: "28 221062 D 666" },
      picture: { large: "https://randomuser.me/api/portraits/women/67.jpg", medium: "https://randomuser.me/api/portraits/med/women/67.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg" },
      nat: "DE",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Lachlan", last: "Walker" },
      location: { street: { number: 1180, name: "Prebensen Drive" }, city: "Palmerston North", state: "Manawatu-Wanganui", country: "New Zealand", postcode: 94590, coordinates: { latitude: "-32.1270", longitude: "-149.8968" }, timezone: { offset: "+8:00", description: "Beijing, Perth, Singapore, Hong Kong" } },
      email: "lachlan.walker@example.com",
      login: { uuid: "2b78c587-e4f3-4ebb-af50-41503e72592a", username: "smalllion657", password: "jules", salt: "GtIkH2PJ", md5: "bbaa5d4f3f47e429b19c34270054c2c6", sha1: "60e5eff3e6e49a4a457ff58ccb94091163a39d2a", sha256: "ad6b5bda5b4969b7b3b02d917521e096ccce87e65861ef9521ae59e55fb7cf7f" },
      dob: { date: "1969-11-16T18:15:17.309Z", age: 52 },
      registered: { date: "2022-03-23T15:27:38.944Z", age: 0 },
      phone: "(066)-722-0857",
      cell: "(015)-752-9627",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/men/99.jpg", medium: "https://randomuser.me/api/portraits/med/men/99.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg" },
      nat: "NZ",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "سوگند", last: "صدر" },
      location: { street: { number: 460, name: "دکتر علی شریعتی" }, city: "ایلام", state: "فارس", country: "Iran", postcode: 73133, coordinates: { latitude: "23.2831", longitude: "-97.4472" }, timezone: { offset: "-1:00", description: "Azores, Cape Verde Islands" } },
      email: "swgnd.sdr@example.com",
      login: { uuid: "ab18ab9e-9e4b-4767-a68d-cc7daa32c995", username: "lazydog101", password: "thegame", salt: "itDZxflU", md5: "7bc1174efb02409bba6837d099a68b06", sha1: "80e6fc01d6c2541ab6cd8d1bf7500f83f6007612", sha256: "af29ab5d43e8093122fe622fe7efe81992f76409b0e8dd4f0eca8b5c63c45d35" },
      dob: { date: "1959-11-28T07:20:06.415Z", age: 62 },
      registered: { date: "2014-04-14T07:25:20.240Z", age: 8 },
      phone: "093-46148418",
      cell: "0976-091-2802",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/women/8.jpg", medium: "https://randomuser.me/api/portraits/med/women/8.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg" },
      nat: "IR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Anton", last: "Lammi" },
      location: { street: { number: 6659, name: "Bulevardi" }, city: "Vaala", state: "Southern Ostrobothnia", country: "Finland", postcode: 40238, coordinates: { latitude: "57.9681", longitude: "30.8594" }, timezone: { offset: "-6:00", description: "Central Time (US & Canada), Mexico City" } },
      email: "anton.lammi@example.com",
      login: { uuid: "17d480a0-12f4-40e4-a342-607802aecb8e", username: "crazylion809", password: "hopkins", salt: "mtIyRpcI", md5: "355cf9c2017b32962650846b5ee7dbd4", sha1: "bab4ec3aceeafcf3851dbe3d99902cf854ca9420", sha256: "d1078377e30c2ae1089e70528474351d1bdcfbe3144fdb5da42004ebd5f6aeba" },
      dob: { date: "1993-08-17T11:38:23.409Z", age: 29 },
      registered: { date: "2009-03-26T16:36:23.509Z", age: 13 },
      phone: "07-191-035",
      cell: "044-000-47-27",
      id: { name: "HETU", value: "NaNNA679undefined" },
      picture: { large: "https://randomuser.me/api/portraits/men/24.jpg", medium: "https://randomuser.me/api/portraits/med/men/24.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg" },
      nat: "FI",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Edouard", last: "Riviere" },
      location: { street: { number: 424, name: "Boulevard de Balmont" }, city: "Tourcoing", state: "Lot", country: "France", postcode: 21496, coordinates: { latitude: "-24.6767", longitude: "108.5896" }, timezone: { offset: "+9:30", description: "Adelaide, Darwin" } },
      email: "edouard.riviere@example.com",
      login: { uuid: "cfd973ab-b311-4b94-9984-80940a2c8b1d", username: "orangecat495", password: "blake1", salt: "HTv6Xu9v", md5: "f7b1f246428b23f8cdd13ea1d6816904", sha1: "8ce1aef04ec83f4db57e6d7566cdb01a49aefcb1", sha256: "bddc11f65f091b3a17c00096c68f97461c4a54498d9eed8a40a96461b4f6aa50" },
      dob: { date: "1982-09-06T14:56:19.894Z", age: 40 },
      registered: { date: "2017-04-12T06:34:59.222Z", age: 5 },
      phone: "04-34-38-74-25",
      cell: "06-74-22-42-47",
      id: { name: "INSEE", value: "1820889189120 89" },
      picture: { large: "https://randomuser.me/api/portraits/men/12.jpg", medium: "https://randomuser.me/api/portraits/med/men/12.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg" },
      nat: "FR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Bently", last: "Ross" },
      location: { street: { number: 3934, name: "Brock Rd" }, city: "Winfield", state: "Yukon", country: "Canada", postcode: "K4L 2D2", coordinates: { latitude: "-86.9597", longitude: "-63.9927" }, timezone: { offset: "0:00", description: "Western Europe Time, London, Lisbon, Casablanca" } },
      email: "bently.ross@example.com",
      login: { uuid: "2b030e2e-e80d-4d93-878f-16c5b46127ae", username: "organicsnake191", password: "nguyen", salt: "HGY3aO2S", md5: "5c0b4bdec5eeec74a0f29700bab72db0", sha1: "acc0a3d765ab232b02e3036d320dcd022a48869e", sha256: "06fb410c8a82bdf0244db0734317e89074fcca49cf5b5fcbdb0905bf4b99275a" },
      dob: { date: "1950-10-18T21:44:30.010Z", age: 71 },
      registered: { date: "2011-01-21T23:19:03.571Z", age: 11 },
      phone: "F79 Z68-0405",
      cell: "S35 X60-4209",
      id: { name: "SIN", value: "903968014" },
      picture: { large: "https://randomuser.me/api/portraits/men/84.jpg", medium: "https://randomuser.me/api/portraits/med/men/84.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg" },
      nat: "CA",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Malone", last: "Marchand" },
      location: { street: { number: 4607, name: "Avenue Goerges Clémenceau" }, city: "Lyon", state: "La Réunion", country: "France", postcode: 67443, coordinates: { latitude: "-26.2219", longitude: "-109.9703" }, timezone: { offset: "-2:00", description: "Mid-Atlantic" } },
      email: "malone.marchand@example.com",
      login: { uuid: "5da757a1-95c6-4a2a-81ed-58bee45b0506", username: "orangeladybug214", password: "1989", salt: "wjkmcVKk", md5: "b267ea76d5381072e3b8c8d0553f724f", sha1: "4d522e2d769946cf7e719c1c38c8845f6938816a", sha256: "d965e28a5548dc2dd6882f86751ebfc625f5f7f45186de001d179e8ea69d9a44" },
      dob: { date: "1985-08-04T04:27:31.209Z", age: 37 },
      registered: { date: "2015-11-30T22:27:07.504Z", age: 6 },
      phone: "02-72-12-24-13",
      cell: "06-92-01-55-78",
      id: { name: "INSEE", value: "1850700338645 50" },
      picture: { large: "https://randomuser.me/api/portraits/men/85.jpg", medium: "https://randomuser.me/api/portraits/med/men/85.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg" },
      nat: "FR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Philip", last: "Pedersen" },
      location: { street: { number: 6478, name: "Hybenvænget" }, city: "St.Merløse", state: "Syddanmark", country: "Denmark", postcode: 81708, coordinates: { latitude: "-3.5224", longitude: "-13.2311" }, timezone: { offset: "+5:00", description: "Ekaterinburg, Islamabad, Karachi, Tashkent" } },
      email: "philip.pedersen@example.com",
      login: { uuid: "c23911a7-ad38-4a25-af5d-5f8231d2d52c", username: "orangegorilla154", password: "shopper", salt: "4NYxlePF", md5: "94d63c5194e02a0b854276503e246b28", sha1: "f874f96332697f26e20137c1e28cab5b6acab01f", sha256: "8158a6a4039c4afeb754f2559102b934257ebdbc33fddb77d92120c963ce550a" },
      dob: { date: "1997-07-08T19:50:52.694Z", age: 25 },
      registered: { date: "2017-06-28T22:34:01.064Z", age: 5 },
      phone: "46138867",
      cell: "97625745",
      id: { name: "CPR", value: "080797-7214" },
      picture: { large: "https://randomuser.me/api/portraits/men/44.jpg", medium: "https://randomuser.me/api/portraits/med/men/44.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg" },
      nat: "DK",
    },
    {
      gender: "female",
      name: { title: "Madame", first: "Audrey", last: "Aubert" },
      location: { street: { number: 2679, name: "Rue du 8 Mai 1945" }, city: "Massonnens", state: "Solothurn", country: "Switzerland", postcode: 3032, coordinates: { latitude: "-18.1643", longitude: "-161.1985" }, timezone: { offset: "+5:45", description: "Kathmandu" } },
      email: "audrey.aubert@example.com",
      login: { uuid: "5dbf4fea-6092-4507-a20d-a355ac39dd1a", username: "purplemeercat865", password: "everton", salt: "OKQorgLd", md5: "2bf4ef6d7fc37be797095c8558c12b73", sha1: "59811b17b3e3f8eda848f209d68388e962f61a87", sha256: "0ef096aa2f2de1d78e7dc342fffd1052dec8eff72281cc306016c0448a909559" },
      dob: { date: "1946-06-26T02:27:28.533Z", age: 76 },
      registered: { date: "2009-05-10T01:57:47.581Z", age: 13 },
      phone: "077 395 58 19",
      cell: "079 507 12 29",
      id: { name: "AVS", value: "756.2276.0427.32" },
      picture: { large: "https://randomuser.me/api/portraits/women/75.jpg", medium: "https://randomuser.me/api/portraits/med/women/75.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg" },
      nat: "CH",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Bertram", last: "Madsen" },
      location: { street: { number: 3919, name: "Mellemgade" }, city: "Gl. Rye", state: "Sjælland", country: "Denmark", postcode: 54591, coordinates: { latitude: "19.4738", longitude: "-61.0240" }, timezone: { offset: "+4:30", description: "Kabul" } },
      email: "bertram.madsen@example.com",
      login: { uuid: "f85828da-97c8-497f-b1aa-c431d8b118b8", username: "purpletiger332", password: "monty", salt: "OhPhKOSZ", md5: "e5215534ff6bc8b4f0f24a6b6ea12222", sha1: "556442ef05c2fcddd805c386ef81a5da083cd647", sha256: "6e389811586a7b48f8790c7537a384bed00e0e16723c9410649968aad07e7b31" },
      dob: { date: "1979-03-07T13:20:49.360Z", age: 43 },
      registered: { date: "2013-04-06T07:55:55.262Z", age: 9 },
      phone: "17522758",
      cell: "65599634",
      id: { name: "CPR", value: "070379-6542" },
      picture: { large: "https://randomuser.me/api/portraits/men/38.jpg", medium: "https://randomuser.me/api/portraits/med/men/38.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg" },
      nat: "DK",
    },
    {
      gender: "male",
      name: { title: "Monsieur", first: "Sandro", last: "Vidal" },
      location: { street: { number: 6581, name: "Avenue Joliot Curie" }, city: "Isone", state: "Basel-Landschaft", country: "Switzerland", postcode: 7687, coordinates: { latitude: "-45.0343", longitude: "175.2926" }, timezone: { offset: "+9:30", description: "Adelaide, Darwin" } },
      email: "sandro.vidal@example.com",
      login: { uuid: "93b9e863-6042-47b2-97d6-13ce720491f6", username: "goldengorilla526", password: "donna", salt: "0GXOKUHY", md5: "09ed8930ece592eca58fede44329d86d", sha1: "ca5fd0843515f9761de8316caeea0412cea2e56e", sha256: "278c27182304c9d5c637ec52184097946244c170094191485d7ad1208d310a9c" },
      dob: { date: "2001-03-01T02:14:38.966Z", age: 21 },
      registered: { date: "2004-06-30T05:07:15.082Z", age: 18 },
      phone: "078 193 65 01",
      cell: "075 083 05 86",
      id: { name: "AVS", value: "756.5380.8029.37" },
      picture: { large: "https://randomuser.me/api/portraits/men/21.jpg", medium: "https://randomuser.me/api/portraits/med/men/21.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg" },
      nat: "CH",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Philip", last: "Kowalski" },
      location: { street: { number: 4989, name: "Duke St" }, city: "Selkirk", state: "Saskatchewan", country: "Canada", postcode: "Q2N 7B6", coordinates: { latitude: "-11.2011", longitude: "44.3621" }, timezone: { offset: "+4:00", description: "Abu Dhabi, Muscat, Baku, Tbilisi" } },
      email: "philip.kowalski@example.com",
      login: { uuid: "36e71cb9-1e24-4d04-9117-3a0eb53486b3", username: "heavylion300", password: "backup", salt: "7oZk629F", md5: "283b9e109be579835077d66773ae1e36", sha1: "035eac8c9144e4677a4d04b1a8599e8fcd76cbd9", sha256: "1e95bda7f8520123751571db2ccd3950179051e9493670f14459873bd794e60f" },
      dob: { date: "1960-04-24T03:30:09.023Z", age: 62 },
      registered: { date: "2017-04-06T14:47:16.397Z", age: 5 },
      phone: "W37 U42-4239",
      cell: "P46 H21-2343",
      id: { name: "SIN", value: "988471777" },
      picture: { large: "https://randomuser.me/api/portraits/men/27.jpg", medium: "https://randomuser.me/api/portraits/med/men/27.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg" },
      nat: "CA",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Alicia", last: "Lebrón" },
      location: { street: { number: 5827, name: "Calzada Carrero" }, city: "Bacame Nuevo", state: "Chiapas", country: "Mexico", postcode: 72789, coordinates: { latitude: "-82.7490", longitude: "21.3899" }, timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" } },
      email: "alicia.lebron@example.com",
      login: { uuid: "749cd53b-1f10-4586-8016-b3b9bf673de0", username: "angryelephant534", password: "smashing", salt: "fDn9YvuJ", md5: "6abcfb21c357ffce00be6dfb80da60d4", sha1: "e901a29b94e17792dbca5eff0681940414f2deb5", sha256: "82e5221d76f45dacca008e273bf0e11dde4d84898aec4c23fb5ef539b8c8643e" },
      dob: { date: "1966-08-19T01:41:24.475Z", age: 56 },
      registered: { date: "2018-10-17T01:51:21.788Z", age: 3 },
      phone: "(673) 894 7433",
      cell: "(604) 475 7110",
      id: { name: "NSS", value: "10 24 21 6518 3" },
      picture: { large: "https://randomuser.me/api/portraits/women/31.jpg", medium: "https://randomuser.me/api/portraits/med/women/31.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg" },
      nat: "MX",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Nolan", last: "Philippe" },
      location: { street: { number: 1524, name: "Rue Courbet" }, city: "Avignon", state: "Finistère", country: "France", postcode: 19719, coordinates: { latitude: "-65.3961", longitude: "149.7307" }, timezone: { offset: "-9:00", description: "Alaska" } },
      email: "nolan.philippe@example.com",
      login: { uuid: "928b5ec5-f528-427a-b2a5-75db638c6447", username: "goldenbear889", password: "original", salt: "SLa6hbzm", md5: "b39028307a0a190e10dfb7f0591472e0", sha1: "90b610d8b33dc8a398fbd3daa31b054c3823ce18", sha256: "4ec437ffd84436f453dcd777359bff97f695e906b0c6442b7bc7bae9f2aa65b8" },
      dob: { date: "1957-06-27T00:57:11.186Z", age: 65 },
      registered: { date: "2016-09-06T22:19:37.933Z", age: 6 },
      phone: "01-29-08-95-14",
      cell: "06-43-92-17-65",
      id: { name: "INSEE", value: "1570548950560 55" },
      picture: { large: "https://randomuser.me/api/portraits/men/43.jpg", medium: "https://randomuser.me/api/portraits/med/men/43.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg" },
      nat: "FR",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Amanda", last: "Jutila" },
      location: { street: { number: 8664, name: "Pispalan Valtatie" }, city: "Lieto", state: "Kainuu", country: "Finland", postcode: 48919, coordinates: { latitude: "-51.7661", longitude: "-16.4021" }, timezone: { offset: "+4:00", description: "Abu Dhabi, Muscat, Baku, Tbilisi" } },
      email: "amanda.jutila@example.com",
      login: { uuid: "cde1df24-0252-4c76-bffb-88de0adba9d1", username: "greenlion464", password: "oilers", salt: "of24W61Z", md5: "e26581484b8ac6cf50973cfab06ed6eb", sha1: "a934a46e34dcf3fbd5602ff78e89041e89134a6f", sha256: "0fa34d37081c53e49598f8aa42d332282a7a61f4b5082b008d05896f46a3a023" },
      dob: { date: "1972-03-21T22:34:57.358Z", age: 50 },
      registered: { date: "2014-04-15T13:16:09.127Z", age: 8 },
      phone: "09-667-443",
      cell: "046-107-92-62",
      id: { name: "HETU", value: "NaNNA414undefined" },
      picture: { large: "https://randomuser.me/api/portraits/women/1.jpg", medium: "https://randomuser.me/api/portraits/med/women/1.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg" },
      nat: "FI",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Ritthy", last: "Rodriguez" },
      location: { street: { number: 8183, name: "Springfield Road" }, city: "Derby", state: "Warwickshire", country: "United Kingdom", postcode: "Q5E 5WH", coordinates: { latitude: "-70.5053", longitude: "-22.2588" }, timezone: { offset: "-9:00", description: "Alaska" } },
      email: "ritthy.rodriguez@example.com",
      login: { uuid: "d3cefbd1-718b-458e-b073-0fb84e0c4e11", username: "goldenswan443", password: "troll", salt: "Mby3j4T3", md5: "d7deee7db860b4393859de1e4aedaecc", sha1: "adf669b29a840a9f1bd839ad47f42d93c530efd2", sha256: "6f8c3bc14c680154e6f109c33e2915df29db9e4130a7232092635e6c230b1db6" },
      dob: { date: "1950-06-30T21:14:35.175Z", age: 72 },
      registered: { date: "2009-11-24T19:01:59.156Z", age: 12 },
      phone: "013873 45613",
      cell: "07828 698763",
      id: { name: "NINO", value: "WW 52 44 42 S" },
      picture: { large: "https://randomuser.me/api/portraits/men/18.jpg", medium: "https://randomuser.me/api/portraits/med/men/18.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg" },
      nat: "GB",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Xavier", last: "Ambrose" },
      location: { street: { number: 7768, name: "3rd St" }, city: "Odessa", state: "Québec", country: "Canada", postcode: "J4V 9D6", coordinates: { latitude: "65.9559", longitude: "-155.8171" }, timezone: { offset: "+9:30", description: "Adelaide, Darwin" } },
      email: "xavier.ambrose@example.com",
      login: { uuid: "d2fbe6ae-857e-49fb-8848-2e21fbac212e", username: "silverwolf332", password: "style", salt: "PhSsQmKW", md5: "bb844e0538b3526b8bf1484fa8506ed1", sha1: "057203be89615add830cf959252fa43b6a2adf61", sha256: "6a5ff725bc875920fa1d25b085fd81d2ea2fa8cfb3fc1a0ff6f812ca1a8e2629" },
      dob: { date: "1945-07-04T18:38:25.657Z", age: 77 },
      registered: { date: "2019-09-01T20:00:25.455Z", age: 3 },
      phone: "R33 S99-8672",
      cell: "Y46 E52-1798",
      id: { name: "SIN", value: "466407905" },
      picture: { large: "https://randomuser.me/api/portraits/men/49.jpg", medium: "https://randomuser.me/api/portraits/med/men/49.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg" },
      nat: "CA",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Paul", last: "Pena" },
      location: { street: { number: 9059, name: "Queensway" }, city: "Brighton and Hove", state: "Cumbria", country: "United Kingdom", postcode: "R0 5QG", coordinates: { latitude: "58.0581", longitude: "143.7100" }, timezone: { offset: "-5:00", description: "Eastern Time (US & Canada), Bogota, Lima" } },
      email: "paul.pena@example.com",
      login: { uuid: "33aa3762-7fe1-416f-bdb2-30d056500e68", username: "silverrabbit216", password: "bassman", salt: "jYwH4UVs", md5: "c73ab11cad896381c97426d95a1fae1e", sha1: "3021822209cbf76f4e6159de745c547de9ceb753", sha256: "be65943733aa29d91d3895f3f92d897b06980b29a72e94113a4f174c72ac1d1a" },
      dob: { date: "1982-07-20T13:04:04.026Z", age: 40 },
      registered: { date: "2007-09-29T10:09:35.144Z", age: 14 },
      phone: "019467 12833",
      cell: "07560 680779",
      id: { name: "NINO", value: "TK 52 13 05 C" },
      picture: { large: "https://randomuser.me/api/portraits/men/76.jpg", medium: "https://randomuser.me/api/portraits/med/men/76.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg" },
      nat: "GB",
    },
    {
      gender: "male",
      name: { title: "Monsieur", first: "Michele", last: "Lecomte" },
      location: { street: { number: 582, name: "Rue de L'Église" }, city: "Chalais", state: "Luzern", country: "Switzerland", postcode: 1521, coordinates: { latitude: "81.8822", longitude: "99.1342" }, timezone: { offset: "+9:30", description: "Adelaide, Darwin" } },
      email: "michele.lecomte@example.com",
      login: { uuid: "ccfdf714-2c4c-4550-8433-ff60fc252bef", username: "purplegorilla646", password: "curtis", salt: "fgEEuPBX", md5: "bd69b4e83efd3110cb358c3bd1da7b48", sha1: "d5072fff319aa2f42bbc942ad7f7b3a296c8fc3c", sha256: "5c234cca095f9159406741e1dedd07e13b736142d7514617ec7735c7ef6c5b94" },
      dob: { date: "1978-01-24T22:46:43.806Z", age: 44 },
      registered: { date: "2007-09-15T22:59:38.370Z", age: 14 },
      phone: "079 247 19 26",
      cell: "076 988 29 74",
      id: { name: "AVS", value: "756.8500.3411.07" },
      picture: { large: "https://randomuser.me/api/portraits/men/38.jpg", medium: "https://randomuser.me/api/portraits/med/men/38.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg" },
      nat: "CH",
    },
    {
      gender: "female",
      name: { title: "Ms", first: "Aurelia", last: "Mittmann" },
      location: { street: { number: 275, name: "Schützenstraße" }, city: "Friedrichstadt", state: "Rheinland-Pfalz", country: "Germany", postcode: 82279, coordinates: { latitude: "-84.7566", longitude: "-61.0044" }, timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" } },
      email: "aurelia.mittmann@example.com",
      login: { uuid: "fad12767-7314-4649-9671-78a52230c920", username: "sadfish606", password: "seamus", salt: "LRnUjOsT", md5: "66a3d914ffe4242d036ce2930f67aaa3", sha1: "90446defdb18ee482deb4e3f3f7c9bc16a58fa25", sha256: "5ac01abcb394a5634456160bfb81061e8294f06ec821397f78b9ca8e8ca82b82" },
      dob: { date: "1964-04-13T03:03:45.742Z", age: 58 },
      registered: { date: "2013-08-23T16:56:00.771Z", age: 9 },
      phone: "0394-3197271",
      cell: "0170-2931430",
      id: { name: "SVNR", value: "12 120464 M 612" },
      picture: { large: "https://randomuser.me/api/portraits/women/87.jpg", medium: "https://randomuser.me/api/portraits/med/women/87.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg" },
      nat: "DE",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Marine", last: "Carpentier" },
      location: { street: { number: 1805, name: "Rue Paul-Duvivier" }, city: "Rueil-Malmaison", state: "Oise", country: "France", postcode: 72548, coordinates: { latitude: "10.7931", longitude: "-11.9351" }, timezone: { offset: "-10:00", description: "Hawaii" } },
      email: "marine.carpentier@example.com",
      login: { uuid: "2bad4c42-4473-44f4-8398-bd0045da6840", username: "greenbird739", password: "4wwvte", salt: "FSUMUSFG", md5: "4cc609ccefc5b44c89ca10e4a3df26de", sha1: "54a99d0295bf3b48eef1ec18ccf841ca6a47756c", sha256: "c743eb5b810ee4892361649494018aec580eb6f8994c35f80b345fb7ba025a24" },
      dob: { date: "1956-12-23T21:47:19.062Z", age: 65 },
      registered: { date: "2003-05-12T02:52:50.067Z", age: 19 },
      phone: "04-31-52-86-65",
      cell: "06-65-67-07-74",
      id: { name: "INSEE", value: "2561170257023 28" },
      picture: { large: "https://randomuser.me/api/portraits/women/26.jpg", medium: "https://randomuser.me/api/portraits/med/women/26.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg" },
      nat: "FR",
    },
    {
      gender: "female",
      name: { title: "Ms", first: "Zoe", last: "Ellis" },
      location: { street: { number: 1768, name: "New Street" }, city: "Ashbourne", state: "Carlow", country: "Ireland", postcode: 19275, coordinates: { latitude: "45.8226", longitude: "85.6452" }, timezone: { offset: "+9:00", description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk" } },
      email: "zoe.ellis@example.com",
      login: { uuid: "ba5cfcea-d631-4a8c-860e-c77a25deabec", username: "smallmouse692", password: "punch", salt: "KZrYK3m1", md5: "3d79d74ed0993df8dda1b8a3deef95c3", sha1: "a5970427db19a9a266feb69ae742c93740229136", sha256: "530c9de613c054fd07bb768aef752cd99fb0f59f14c67f31c8bb43448920803a" },
      dob: { date: "1965-07-17T15:37:49.013Z", age: 57 },
      registered: { date: "2019-07-11T07:05:13.816Z", age: 3 },
      phone: "011-426-0454",
      cell: "081-695-2578",
      id: { name: "PPS", value: "1460142T" },
      picture: { large: "https://randomuser.me/api/portraits/women/65.jpg", medium: "https://randomuser.me/api/portraits/med/women/65.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg" },
      nat: "IE",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Pedro", last: "Peck" },
      location: { street: { number: 3355, name: "Thornridge Cir" }, city: "North Valley", state: "Maryland", country: "United States", postcode: 34633, coordinates: { latitude: "20.9945", longitude: "-105.2838" }, timezone: { offset: "-6:00", description: "Central Time (US & Canada), Mexico City" } },
      email: "pedro.peck@example.com",
      login: { uuid: "8b78c327-2810-4fc4-88ab-a9a34190599d", username: "goldenswan522", password: "galant", salt: "meluemo2", md5: "b854d37fdc3f755c3c5dcd2f258056db", sha1: "bd4c06c06d75ca3ebf5dd360715f8ee70d474762", sha256: "7b65c3e746b77b78b42fb08930bdb49adc7d940a7d677251ded5c3631d13a223" },
      dob: { date: "1972-07-14T10:23:50.562Z", age: 50 },
      registered: { date: "2015-09-25T21:27:05.947Z", age: 6 },
      phone: "(909) 424-8053",
      cell: "(691) 428-8744",
      id: { name: "SSN", value: "104-08-5636" },
      picture: { large: "https://randomuser.me/api/portraits/men/89.jpg", medium: "https://randomuser.me/api/portraits/med/men/89.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg" },
      nat: "US",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Greg", last: "Gardner" },
      location: { street: { number: 4609, name: "Victoria Street" }, city: "Chester", state: "West Midlands", country: "United Kingdom", postcode: "WA46 2HA", coordinates: { latitude: "-84.1880", longitude: "-52.6414" }, timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" } },
      email: "greg.gardner@example.com",
      login: { uuid: "cd376e99-d2fc-490c-b34f-43ba073c6440", username: "brownpeacock320", password: "3636", salt: "xqdQQYY6", md5: "57efe2fbba617150ce1840d2ae68bfd0", sha1: "c3ac266ec44e16323332102e402bce13626a4157", sha256: "40a43590eb24bdd9693004f820f7335ddefb3dea42c6ed8f8e82cd7c9a702c86" },
      dob: { date: "1980-04-05T09:29:01.244Z", age: 42 },
      registered: { date: "2003-11-19T01:27:03.560Z", age: 18 },
      phone: "0113523 287 8446",
      cell: "07309 917525",
      id: { name: "NINO", value: "JT 56 25 60 B" },
      picture: { large: "https://randomuser.me/api/portraits/men/97.jpg", medium: "https://randomuser.me/api/portraits/med/men/97.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg" },
      nat: "GB",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "امیر", last: "کامروا" },
      location: { street: { number: 4902, name: "اقبال لاهوری" }, city: "اهواز", state: "قم", country: "Iran", postcode: 41550, coordinates: { latitude: "-60.0858", longitude: "-8.9602" }, timezone: { offset: "+11:00", description: "Magadan, Solomon Islands, New Caledonia" } },
      email: "myr.khmrw@example.com",
      login: { uuid: "a683d7a1-a29a-4bd9-9e49-862c843c8e98", username: "bluepeacock253", password: "fishin", salt: "cv9y5gM2", md5: "e46a8e818a04c927ba0ec6de2e7a2897", sha1: "882d42032e2768dc2b40b3cb4a8492cda2f8e6e0", sha256: "f8dce7840a612ab8ba88b16db21b9db1aaaefcb11ae7dfcb5badfca75b65a9eb" },
      dob: { date: "1947-11-03T04:42:41.985Z", age: 74 },
      registered: { date: "2004-05-23T20:06:04.124Z", age: 18 },
      phone: "050-51662727",
      cell: "0986-937-9879",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/men/25.jpg", medium: "https://randomuser.me/api/portraits/med/men/25.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg" },
      nat: "IR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Solano", last: "Gomes" },
      location: { street: { number: 1157, name: "Rua Pará " }, city: "Guarapuava", state: "Amapá", country: "Brazil", postcode: 80909, coordinates: { latitude: "2.1636", longitude: "168.8816" }, timezone: { offset: "+3:00", description: "Baghdad, Riyadh, Moscow, St. Petersburg" } },
      email: "solano.gomes@example.com",
      login: { uuid: "eb57a964-24df-4ea1-a2ef-8ca9b8d4567f", username: "angrytiger348", password: "gator", salt: "Wdp8HcGq", md5: "3f23f04441580221404b507a61dea977", sha1: "3f9cfd417b85af00c99e9fdc995386d213312afe", sha256: "aa029f38ca518f3310a04734dd60192a8f92c3410edbd48c6094aca13ec853b7" },
      dob: { date: "1969-07-03T05:38:16.411Z", age: 53 },
      registered: { date: "2022-05-23T19:15:19.226Z", age: 0 },
      phone: "(07) 5209-8976",
      cell: "(78) 3277-6421",
      id: { name: "CPF", value: "077.705.911-78" },
      picture: { large: "https://randomuser.me/api/portraits/men/85.jpg", medium: "https://randomuser.me/api/portraits/med/men/85.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg" },
      nat: "BR",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Elizabeth", last: "Steward" },
      location: { street: { number: 7545, name: "Bruce St" }, city: "Launceston", state: "Western Australia", country: "Australia", postcode: 2457, coordinates: { latitude: "-69.6766", longitude: "-101.1301" }, timezone: { offset: "-4:00", description: "Atlantic Time (Canada), Caracas, La Paz" } },
      email: "elizabeth.steward@example.com",
      login: { uuid: "bb1f6981-211d-4609-9a95-d0d14f6b13c7", username: "yellowbutterfly529", password: "3x7pxr", salt: "rO8RtDBq", md5: "4b0461d94dbbb787e23afd0dbd23c304", sha1: "a304ff81f9524f7708feacde9c1599e5784b083f", sha256: "8429cef0f287f518b2395c4266b884c11955bd6f2930c5e717a18ed48fff3763" },
      dob: { date: "1990-02-10T17:59:10.019Z", age: 32 },
      registered: { date: "2013-10-24T14:20:45.342Z", age: 8 },
      phone: "08-8954-8463",
      cell: "0422-095-848",
      id: { name: "TFN", value: "141514426" },
      picture: { large: "https://randomuser.me/api/portraits/women/59.jpg", medium: "https://randomuser.me/api/portraits/med/women/59.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg" },
      nat: "AU",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Sergio", last: "Rolón" },
      location: { street: { number: 8675, name: "Prolongación Estonia" }, city: "Omealca", state: "Guerrero", country: "Mexico", postcode: 52546, coordinates: { latitude: "22.1306", longitude: "-0.3869" }, timezone: { offset: "+11:00", description: "Magadan, Solomon Islands, New Caledonia" } },
      email: "sergio.rolon@example.com",
      login: { uuid: "6be6f3d2-edf8-4179-b4b4-e5bc64645e96", username: "smallbutterfly113", password: "1956", salt: "vwOLADZy", md5: "2772d53e0123abdf035cdf0fb1778f99", sha1: "9b14ac1bdf97959200a1adbdeed9e48c98839765", sha256: "fad6de1b4d53f83f3daf4cc9e620111bf850a04fee29c6b4ba00e546ad5150b7" },
      dob: { date: "1986-08-21T00:58:44.517Z", age: 36 },
      registered: { date: "2010-01-03T13:58:51.658Z", age: 12 },
      phone: "(606) 888 9510",
      cell: "(681) 843 1442",
      id: { name: "NSS", value: "98 44 00 8272 4" },
      picture: { large: "https://randomuser.me/api/portraits/men/40.jpg", medium: "https://randomuser.me/api/portraits/med/men/40.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg" },
      nat: "MX",
    },
    {
      gender: "male",
      name: { title: "Monsieur", first: "Petar", last: "Morin" },
      location: { street: { number: 7592, name: "Rue de L'Abbé-Migne" }, city: "Wittinsburg", state: "Genève", country: "Switzerland", postcode: 4870, coordinates: { latitude: "23.2374", longitude: "-70.9663" }, timezone: { offset: "+11:00", description: "Magadan, Solomon Islands, New Caledonia" } },
      email: "petar.morin@example.com",
      login: { uuid: "333566fd-e7c2-4cbb-a38c-0aaf071c9412", username: "greenwolf583", password: "piggy", salt: "C8CXHAKT", md5: "9e155eed8dd3a7c255ec05d0025fcb3b", sha1: "a35727cf659227fb3a7600cbaedd9ba2b8e31fae", sha256: "17ee46bf30805a162e241eff851f013a628cef479714be2e6036f0489c8f5263" },
      dob: { date: "1963-06-11T11:19:44.112Z", age: 59 },
      registered: { date: "2012-03-14T03:43:37.556Z", age: 10 },
      phone: "079 279 09 09",
      cell: "076 799 13 64",
      id: { name: "AVS", value: "756.0033.4021.66" },
      picture: { large: "https://randomuser.me/api/portraits/men/11.jpg", medium: "https://randomuser.me/api/portraits/med/men/11.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg" },
      nat: "CH",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Manuela", last: "Santos" },
      location: { street: { number: 2286, name: "Avenida de América" }, city: "Fuenlabrada", state: "Extremadura", country: "Spain", postcode: 38868, coordinates: { latitude: "35.5787", longitude: "-148.8858" }, timezone: { offset: "-9:00", description: "Alaska" } },
      email: "manuela.santos@example.com",
      login: { uuid: "73fc559d-0476-4d5b-9de7-b665076c8c22", username: "yellowbutterfly688", password: "johnny1", salt: "GAXXf15M", md5: "4498076390d78dd2a4b85c58555d275e", sha1: "36f97795b316632f5c28d7d10097f8fda2aa59ab", sha256: "133548141b8f09f521e69357c216a612a849397ca39ebc66c938b618060f539b" },
      dob: { date: "1960-12-24T23:55:06.372Z", age: 61 },
      registered: { date: "2013-03-11T11:34:41.741Z", age: 9 },
      phone: "952-932-355",
      cell: "633-595-022",
      id: { name: "DNI", value: "25464740-V" },
      picture: { large: "https://randomuser.me/api/portraits/women/67.jpg", medium: "https://randomuser.me/api/portraits/med/women/67.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg" },
      nat: "ES",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Aatu", last: "Ojala" },
      location: { street: { number: 7708, name: "Hämeenkatu" }, city: "Isokyrö", state: "Lapland", country: "Finland", postcode: 96785, coordinates: { latitude: "-79.8676", longitude: "-124.6721" }, timezone: { offset: "0:00", description: "Western Europe Time, London, Lisbon, Casablanca" } },
      email: "aatu.ojala@example.com",
      login: { uuid: "13742982-d566-4cc2-a724-1b90e1063a50", username: "smalltiger462", password: "volkswag", salt: "IuOSbzJ9", md5: "62c6be5f247aa7341c89f230c138e2b0", sha1: "3c819ce2cc558d94c6469f4e6073b9c80d8ff91d", sha256: "7dddddd8eb385e867503d04c15326da834e39bf99b65f6d72fb99d788d5b2dd8" },
      dob: { date: "1951-03-02T21:16:14.797Z", age: 71 },
      registered: { date: "2008-05-03T03:50:32.637Z", age: 14 },
      phone: "08-424-860",
      cell: "045-445-12-25",
      id: { name: "HETU", value: "NaNNA549undefined" },
      picture: { large: "https://randomuser.me/api/portraits/men/93.jpg", medium: "https://randomuser.me/api/portraits/med/men/93.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg" },
      nat: "FI",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Lilia", last: "Prieto" },
      location: { street: { number: 6642, name: "Ampliación Norte Vásquez" }, city: "Zinaparo", state: "Baja California Sur", country: "Mexico", postcode: 43494, coordinates: { latitude: "67.9587", longitude: "-98.5831" }, timezone: { offset: "-9:00", description: "Alaska" } },
      email: "lilia.prieto@example.com",
      login: { uuid: "b624f0df-8277-45f3-aba9-7de908915913", username: "ticklishsnake137", password: "possum", salt: "ljpYUsBt", md5: "67d44bcb6e030d067423a69e4b9a98cc", sha1: "027ca8a1f0c0ef48f97150b4447e766afbb6ff3f", sha256: "bd09fcc69c15e68771ee6affeab6e97efcfe0efa18d1e1535c605fbc94a5ce44" },
      dob: { date: "1986-06-29T13:12:38.776Z", age: 36 },
      registered: { date: "2005-10-20T14:33:49.131Z", age: 16 },
      phone: "(688) 730 1909",
      cell: "(635) 999 8273",
      id: { name: "NSS", value: "10 10 82 2910 0" },
      picture: { large: "https://randomuser.me/api/portraits/women/89.jpg", medium: "https://randomuser.me/api/portraits/med/women/89.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg" },
      nat: "MX",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Muhittin", last: "Nell" },
      location: { street: { number: 8556, name: "Donderslaan" }, city: "Tiel", state: "Noord-Holland", country: "Netherlands", postcode: "5774 WD", coordinates: { latitude: "10.8123", longitude: "43.6855" }, timezone: { offset: "+4:00", description: "Abu Dhabi, Muscat, Baku, Tbilisi" } },
      email: "muhittin.nell@example.com",
      login: { uuid: "d972631d-eced-4da5-9679-0fa9c775a21b", username: "goldenbutterfly308", password: "merlot", salt: "bS2sRwI6", md5: "3bc7db8c46c1085b87e4b448112c5e1b", sha1: "e8241f52cba3a91710ea0a8b0c3d84d66eae1523", sha256: "14af7a50e00016393c020fa743b430fadc3edbd6af520df6493955c0c47108da" },
      dob: { date: "1946-10-21T22:43:23.946Z", age: 75 },
      registered: { date: "2020-10-06T22:54:08.016Z", age: 1 },
      phone: "(0567) 767664",
      cell: "(06) 18151894",
      id: { name: "BSN", value: "53877211" },
      picture: { large: "https://randomuser.me/api/portraits/men/45.jpg", medium: "https://randomuser.me/api/portraits/med/men/45.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg" },
      nat: "NL",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Kostyantin", last: "Cherevatenko" },
      location: { street: { number: 446, name: "Nizhniy Val" }, city: "Yagotin", state: "Hersonska", country: "Ukraine", postcode: 25007, coordinates: { latitude: "88.6835", longitude: "-106.9928" }, timezone: { offset: "-9:00", description: "Alaska" } },
      email: "kostyantin.cherevatenko@example.com",
      login: { uuid: "a372672c-c1dc-44e6-906e-2ebee5d61628", username: "silverfish249", password: "thedude", salt: "PWwdm2Si", md5: "f47267df3ee2138fe18717cdd5590b09", sha1: "669909bf8e952ff4023f5e7afcac4f67ff409861", sha256: "8fee148fe54f95436d55b4735f081fdc5b84d06f97ee4d53701f35dd6e88ee09" },
      dob: { date: "1973-07-06T02:37:32.859Z", age: 49 },
      registered: { date: "2021-01-10T18:25:50.409Z", age: 1 },
      phone: "(098) S51-3422",
      cell: "(068) K67-2817",
      id: { name: "", value: null },
      picture: { large: "https://randomuser.me/api/portraits/men/6.jpg", medium: "https://randomuser.me/api/portraits/med/men/6.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg" },
      nat: "UA",
    },
  ],
  info: { seed: "48701a6f8661e0c1", results: 50, page: 1, version: "1.4" },
};

/*

const apiURL = "https://randomuser.me/api/?results=50";

useEffect(() => {
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setData(data.results);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

*/

function Cardslist(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDescending, setSortDescending] = useState(false);

  const renderItem = (item) => {
    return (
      <div>
        {props.listView && (
          <div className="cardContainer">
            <div className="cardNameContainer">
              <p className="cardName">{item.name.first + " " + item.name.last}</p>
              <p className="cardLocation">{item.location.country}</p>
            </div>
            <div className="cardContactContainer">
              <FiMail className="cardContactIconMail" />

              <FiPhoneCall className="cardContactIconPhone" />
            </div>
            <div className="cardPicture" style={{ backgroundImage: `url(${item.picture.large})` }}></div>
            <div class="cardBackgroundShape"></div>
          </div>
        )}

        {!props.listView && (
          <div className="cardColumnContainer">
            <div className="cardColumnNameContainer">
              <p className="cardColumnName">{item.name.first + " " + item.name.last}</p>
            </div>
            <div className="cardColumnPicture" style={{ backgroundImage: `url(${item.picture.large})` }}></div>
            <p className="cardColumnLocation">{item.location.country}</p>
            <div className="cardColumnContactContainer">
              <FiMail className="cardColumnContactIconMail" />
              <FiPhoneCall className="cardColumnContactIconPhone" />
            </div>
            <div className="cardColumnShapeTopLeft"></div>
            <div className="cardColumnShapeTopRight"></div>
            <div className="cardColumnShapeBottomLeft"></div>
            <div className="cardColumnShapeBottomRight"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {!props.listView && (
        <div className="allColumnCardsContainer">
          <FlatList
            list={mydata.results}
            renderItem={renderItem}
            renderWhenEmpty={() => <div>List is empty!</div>}
            sort={{
              by: ["name.first"],
              descending: props.sortDescending,
            }}
            search={{
              by: "name.first",
              term: props.mysearchTerm,
              minCharactersCount: 2,
              caseInsensitive: true,
            }}
          />
        </div>
      )}
      {props.listView && (
        <div>
          <FlatList
            list={mydata.results}
            renderItem={renderItem}
            renderWhenEmpty={() => <div>List is empty!</div>}
            sort={{
              by: ["name.first"],
              descending: props.sortDescending,
            }}
            search={{
              by: "name.first",
              term: props.mysearchTerm,
              minCharactersCount: 2,
              caseInsensitive: true,
            }}
          />
        </div>
      )}
    </>
  );
}

export default Cardslist;
