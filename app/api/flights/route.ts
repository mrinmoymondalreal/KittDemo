export async function GET(){
  let flights =[
    [
      {
        name: 'Emirates',
        flight_number: 'AT 4334',
        departure_time: '9:45 AM',
        arrival_time: '11:45 AM',
        route: 'CDG - DXB',
        duration: '2h 10min',
        stop_count: 'Non stop',
        price: '2,456.90',
        flight_image: 'https://s3-alpha-sig.figma.com/img/7076/3924/882e9e02ae1c412e82b17d8766c73164?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVb0rdjzLY2C06JwAyrBc~7BnZGwIGC6pnvDE8ew16MK1XPsylyRKSaByuiPAsSRGfazRMhZEdlEIp32uUIF-HaQYMWIe~blkGKWNs3PTfTWmCws7WlZWWe~~8-GQbmEqappxUDskT48dSanp85xHuWMytrterFgtS7N~tOTLBLui1D~5wlWwZcWAaC8nkgzt12H96qYVFQ5fea-HWKiK9wS7zmjVezDrl8F8-DZ5fXd4T-ffVoCXNNX7gdWiD40LVCP2ceU8Vyw3dKiup0psXtetsRyWGumX~iEgfC64os-k~~-uS0ot7BK2YuaUGoi2PqHJcTB645hE~mPwd~1FQ__'
      },
      {
        name: 'Lufthansa',
        flight_number: 'AT 4334',
        departure_time: '11:45 PM',
        arrival_time: '6:45 AM',
        badge: '+1 day',
        route: 'DXB - CDG',
        duration: '4h 10min',
        stops: '6h 32m in Lisbon, Portugal',
        stop_count: '2 stops',
        flight_image: 'https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNGYlBMh3nww5FNvKrNg5~L32TsVlY9Ko9hiAIjgBQuFr~g2Kot7W17x6HlKLKqNg2rXLd6NGafMaTlPz-UyQnE0W8ribMAbhAQB6ABL7rce2wIuJpFP3kSesPxeaVoKiV8cygczQVI2UbgZRrPBLDBCX8JRpPWVHB4~Ig6-4hlF~u3-g~P6ZyTSn1gzg2nRyzGU0-KyCunskcCRmZISjbcgCIHBezhzcAEGZpTkBzntlGqGpUMaUpqtw0r0EKYOQ1XO~o1Cse~S9ZPIcgHdFv5X20SX7v8n6CypsYIa-JfeP3ZJYIDdqPWCCW0eEEizdNOr-UViG~~4ivjwlhMlHQ__',
        price: '2,456.90'
      }
    ],
    [
      {
        name: 'Emirates',
        flight_number: 'AT 4334',
        departure_time: '9:45 AM',
        arrival_time: '11:45 AM',
        route: 'CDG - DXB',
        duration: '7h 10min',
        stop_count: '1 stop',
        price: '1,456.90',
        date: 'Thru 25 Jun',
        flight_image: 'https://s3-alpha-sig.figma.com/img/7076/3924/882e9e02ae1c412e82b17d8766c73164?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVb0rdjzLY2C06JwAyrBc~7BnZGwIGC6pnvDE8ew16MK1XPsylyRKSaByuiPAsSRGfazRMhZEdlEIp32uUIF-HaQYMWIe~blkGKWNs3PTfTWmCws7WlZWWe~~8-GQbmEqappxUDskT48dSanp85xHuWMytrterFgtS7N~tOTLBLui1D~5wlWwZcWAaC8nkgzt12H96qYVFQ5fea-HWKiK9wS7zmjVezDrl8F8-DZ5fXd4T-ffVoCXNNX7gdWiD40LVCP2ceU8Vyw3dKiup0psXtetsRyWGumX~iEgfC64os-k~~-uS0ot7BK2YuaUGoi2PqHJcTB645hE~mPwd~1FQ__'
      },
      {
        name: 'Emirates',
        flight_number: 'AT 4334',
        departure_time: '11:45 PM',
        arrival_time: '6:45 AM',
        badge: '+1 day',
        route: 'CDG - DXB',
        duration: '19h 10min',
        stops: 'Lisbon',
        stop_count: '1 stop',
        price: '1,456.90',
        date: 'Sat 2 Jul',
        flight_image: 'https://s3-alpha-sig.figma.com/img/7076/3924/882e9e02ae1c412e82b17d8766c73164?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVb0rdjzLY2C06JwAyrBc~7BnZGwIGC6pnvDE8ew16MK1XPsylyRKSaByuiPAsSRGfazRMhZEdlEIp32uUIF-HaQYMWIe~blkGKWNs3PTfTWmCws7WlZWWe~~8-GQbmEqappxUDskT48dSanp85xHuWMytrterFgtS7N~tOTLBLui1D~5wlWwZcWAaC8nkgzt12H96qYVFQ5fea-HWKiK9wS7zmjVezDrl8F8-DZ5fXd4T-ffVoCXNNX7gdWiD40LVCP2ceU8Vyw3dKiup0psXtetsRyWGumX~iEgfC64os-k~~-uS0ot7BK2YuaUGoi2PqHJcTB645hE~mPwd~1FQ__'
      }
    ],
    [
      {
        name: 'Lufthansa',
        flight_number: 'AT 4334',
        departure_time: '9:45 AM',
        arrival_time: '11:45 AM',
        route: 'CDG - DXB',
        duration: '7h 10min',
        stop_count: 'Non stop',
        price: '1,456.90',
        date: 'Thru 25 Jun',
        flight_image: 'https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNGYlBMh3nww5FNvKrNg5~L32TsVlY9Ko9hiAIjgBQuFr~g2Kot7W17x6HlKLKqNg2rXLd6NGafMaTlPz-UyQnE0W8ribMAbhAQB6ABL7rce2wIuJpFP3kSesPxeaVoKiV8cygczQVI2UbgZRrPBLDBCX8JRpPWVHB4~Ig6-4hlF~u3-g~P6ZyTSn1gzg2nRyzGU0-KyCunskcCRmZISjbcgCIHBezhzcAEGZpTkBzntlGqGpUMaUpqtw0r0EKYOQ1XO~o1Cse~S9ZPIcgHdFv5X20SX7v8n6CypsYIa-JfeP3ZJYIDdqPWCCW0eEEizdNOr-UViG~~4ivjwlhMlHQ__',
      },
      {
        name: 'Lufthansa, Indigo',
        flight_number: 'AT 4334, 8E 783',
        departure_time: '11:45 PM',
        arrival_time: '6:45 AM',
        badge: '+1 day',
        route: 'CDG - DXB',
        duration: '4h 10min',
        stop_count: 'Non stop',
        price: '1,456.90',
        date: 'Thru 25 Jun',
        flight_image: ['https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNGYlBMh3nww5FNvKrNg5~L32TsVlY9Ko9hiAIjgBQuFr~g2Kot7W17x6HlKLKqNg2rXLd6NGafMaTlPz-UyQnE0W8ribMAbhAQB6ABL7rce2wIuJpFP3kSesPxeaVoKiV8cygczQVI2UbgZRrPBLDBCX8JRpPWVHB4~Ig6-4hlF~u3-g~P6ZyTSn1gzg2nRyzGU0-KyCunskcCRmZISjbcgCIHBezhzcAEGZpTkBzntlGqGpUMaUpqtw0r0EKYOQ1XO~o1Cse~S9ZPIcgHdFv5X20SX7v8n6CypsYIa-JfeP3ZJYIDdqPWCCW0eEEizdNOr-UViG~~4ivjwlhMlHQ__', 'https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNGYlBMh3nww5FNvKrNg5~L32TsVlY9Ko9hiAIjgBQuFr~g2Kot7W17x6HlKLKqNg2rXLd6NGafMaTlPz-UyQnE0W8ribMAbhAQB6ABL7rce2wIuJpFP3kSesPxeaVoKiV8cygczQVI2UbgZRrPBLDBCX8JRpPWVHB4~Ig6-4hlF~u3-g~P6ZyTSn1gzg2nRyzGU0-KyCunskcCRmZISjbcgCIHBezhzcAEGZpTkBzntlGqGpUMaUpqtw0r0EKYOQ1XO~o1Cse~S9ZPIcgHdFv5X20SX7v8n6CypsYIa-JfeP3ZJYIDdqPWCCW0eEEizdNOr-UViG~~4ivjwlhMlHQ__'],
      }
    ]
  ]
  

// let timer = (s: number) => new Promise(res => setTimeout(() => res(0), s));

// await timer(4000);

return Response.json(flights);

}