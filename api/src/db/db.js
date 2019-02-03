import casual from 'casual'


/**
 *  Generation Mock DB
 */
const totalSmarthPhones = 100

const modelsPhones = [
    { title: 'ZTE One Plus 6',
        image: 'https://staticshop.o2.co.uk/product/images/oneplus_6_64gb_mirror_black_header.png?cb=ed4ea485be47d776218c6fe854b71527'
    },
    { title: 'Sony Xperia XZ2',
        image: 'https://media.carphonewarehouse.com/is/image/cpw2/xperia-xz2BLUE?$xl-retina$'
    },
    { title: 'Blackberry KEYone',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61AJ2%2BBFBiL._SX466_.jpg'
    },
    { title: 'Google Pixel 3 XL',
        image: 'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/g/o/google-pixel-3-xl-4gb64gb-rosa-g013c-0842776108654.jpg'
    },
    { title: 'LG G7 ThinQ',
        image: 'https://cdn.movertix.com/media/catalog/product/cache/image/600x/l/g/lg-g7-thinq-4gb64gb-negro-8806087030976.jpg'
    },
    { title:  'Huawei P20 Pro',
        image: 'https://www.moviles.com/fotos/huawei-p20-pro-71147-g.jpg'
    },
    { title: 'Samsung Galaxy S9',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71cl2ffbTTL._SY879_.jpg'
    },
    { title:  'Xiaomi Mi 8',
        image: 'https://www.powerplanetonline.com/cdnassets/movil_xiaomi_mi_8_6gb_128gb_blanco_01_ad_l.jpg'
    },
    { title:  'Samsung Galaxy Note 9',
        image: 'https://www.dhresource.com/0x0s/f2-albu-g6-M01-CD-93-rBVaR1tqssGAHmrkAAINY4nKphQ002.jpg/para-galaxy-note-9-casos-de-fibra-de-carbono.jpg'
    },
    { title: 'iPhone XS Max',
        image: 'https://images-na.ssl-images-amazon.com/images/I/712VyVYBcDL._SY550_.jpg'
    },
    { title: 'iPhone XR',
        image: 'https://www.tuimeilibre.com/1503-large_default/apple-iphone-xr-128gb-negro.jpg'
    },
    { title:  'Samsung Galaxy A7',
        image: 'https://http2.mlstatic.com/samsung-galaxy-a7-2018-entrega-inmediata-triple-camara-D_NQ_NP_719365-MLA28747717132_112018-F.jpg'
    },
]


casual.define('phoneMock', (id) => {
    let random = casual.integer(0, modelsPhones.length-1)
    return {
        id: id,
        title: modelsPhones[random].title,
        description: casual.words(5),
        color: casual.safe_color_name,
        image: modelsPhones[random].image,
        price: Number.parseInt(casual.integer(200, 1000)),
        characteristics: casual.description
    }
})

const generateMockListPhones = (maxAmount) => {
    let phoneList = []
    for(let i=0; i<maxAmount; i++){
        phoneList.push(casual.phoneMock(i+1))
    }

    return phoneList
}

const smartphones = generateMockListPhones(totalSmarthPhones)


/**
 *  Functions API
 */

export const PhoneMockController = {

    getMockPhoneList: () => smartphones,

    getMockPhoneListPagination: (queryParams) => {
        let pageNumber = queryParams.pageNumber
        let pageSize = queryParams.pageSize
        return smartphones.slice(pageSize * (pageNumber - 1), pageSize * pageNumber)
    },

    getMockPhoneDetails: (id) => {
        return smartphones.find((phone) => phone.id === id)
    }
}