angular.module('heliosApp.services', [])

.service('scrollServices', function(smoothScroll){
    return {
        scrollTop: function(){
          smoothScroll(document.getElementById('top'), {offset: 50});
        }
    };
})

.factory('SiteContent', function(){
    var slides = [
      {
        image: '/static/img/projects/liquid/6.jpg',
        title: {
            en: 'Welcome to Helios Roofing & Waterproofing',
            zhs: '您好，我们是Helios屋顶工程公司',
            zht: '您好，我们是Helios屋顶工程公司',
        },
        detail: {
            en: 'Helios Roofing & Waterproofing Ltd offers roof design, roof installation and roof management services. We work on commercial, industrial and residential properties, protect them against BC’s extreme weather. ',
            zhs: '我们提供屋顶设计，屋顶安装和维护服务。我们承接商业，工业和住宅物业项目，保护您的工作居所在卑诗省的极端天气下依然舒适。',
            zht: '我们提供屋顶设计，屋顶安装和维护服务。我们承接商业，工业和住宅物业项目，保护您的工作居所在卑诗省的极端天气下依然舒适。'
        }
      },
      {
        image: '/static/img/projects/shingle1/7.jpg',
        title: {
            en: 'Expert on all roofing system',
            zhs: '各类屋顶专家',
            zht: '各类屋顶专家'
        },
        detail: {
            en: 'We are approved installers of all roofing systems such as torch on flat roofing, single ply roofing, green roofing, metal cladding, and metal roofing.',
            zhs: '我们获得政府批准承接所有屋面系统安装维护，如烫胶屋顶，单层屋面，屋顶绿化，金属包层和金属屋面。',
            zht: '我们获得政府批准承接所有屋面系统安装维护，如烫胶屋顶，单层屋面，屋顶绿化，金属包层和金属屋面。'
        }
      },
      {
        image: '/static/img/projects/commTorchFlat/bridgeportRichmond/1.jpg',
        title: {
            en: 'Great satisfaction from clients',
            zhs: '保质准时的商业屋顶工程',
            zht: '保質準時的商業屋頂工程'
        },
        detail: {
            en: 'With professionalism led involvement on each project, our aim is to deliver quality projects safely, on time, on budget and defect free, ensuring total satisfaction from every client. ',
            zhs: '秉承敬业精神参与的每一个项目中，我们的目标是高质量的工程安全，按时，按预算和无缺陷的工程品质，确保从每一个客户完全满意。',
            zht: '秉承敬业精神参与的每一个项目中，我们的目标是高质量的工程安全，按时，按预算和无缺陷的工程品质，确保从每一个客户完全满意。'
        }
      },
    ];

    var serviceCategories = {
      commercial: {
        summary: {
          en: 'We have strong experience in building and reparing commercial roofing system in Great Vancouver.',
          zhs: '我们在大温哥华地区有丰富的商业屋顶修建经验，建立了良好的口碑。',
          zht: '我們在大溫哥華地區有豐富的商業屋頂修建經驗，建立了良好的口碑。'
        },
        backgroundImg: 'url(/static/img/commercial-background.jpg)', 
      },
      residential: {
        summary: {
          en: 'From apartment to single home, we have helped more than 100 families with better roofing system.',
          zhs: '从西温海岸到枫树岭，我们的足迹遍布大温，为超过100个家庭安装维修了放心、耐用、实惠的屋顶系统。用我们的专业和细心，换您每一天的安心和放心！',
          zht: '從西溫海岸到楓樹嶺，我們的足跡遍布大溫，為超過100個家庭安裝維修了放心、耐用、實惠的屋頂系統。用我們的專業和細心，換您每一天的安心和放心！'
        },
        backgroundImg: 'url(/static/img/residential-background.jpg)',
      }
    };

    var services = [
        {
          code: 'commTorch',
          icon: '/static/img/services/CommTorchFlat/icon.png',
          img: '/static/img/services/CommTorchFlat/project.jpg',
          name: {
            en: 'Torch-On Roofing',
            zhs: '烫胶屋顶',
            zht: '烫胶屋顶'
          }, 
          /*
          detail: {
            en: 'We help you to install and maintain this type of roof.',
            zhs: '一种塑胶底的防水屋顶。跟沥青片和瓦片不同的地方在于他的安装。这种屋顶是烧上去的，不是钉上去或卡上去的。如果屋顶是平顶的，这可能是最好的屋顶材质选项',
            zht: '一種塑膠底的防水屋頂。跟瀝青片和瓦片不同的地方在於他的安裝。這種屋頂是燒上去的，不是釘上去或卡上去的。如果屋頂是平頂的，這可能是最好的屋頂材質選項.'
          },
          */
          detail: {
            en: '<p>We offers complete SBS system for flat or low slope roofing. ' +
          'Generally, the complete SBS system contains a flexible SBS elastomeric bitumen waterproofing membrane with a non-woven polyester reinforcement. '+
          'Both sides are protected by a thermofusible film. Also, there is another layer of SBS elastomeric bitumen waterproofing membranes with a non-woven polyester reinforcement. '+
          'The topside is protected by slate chippings and the underside by a thermofusible film.</p>'+
          '<ul>Benefits:'+ 
            '<li>High performance: Non-woven polyester reinforcement of 180 g/m² offers excellent static and dynamic puncture resistance.</li>'+
            '<li>Versatility: Designed to have a perfect adaptability to weather and movement of the substrate.</li>'+
            '<li>Reliability and durability: Made from selected bitumen and polymers containing additives, which give a high resistance to weathering.</li>'+
            '<li>Easy to apply: Underside and overlap protected by a thermofusible film for a quick and safe use with torch-on techniques. The topside is covered by slate chippings for the protection of the membrane against external elements and UV.</li>'+
          '</ul>',
          },  
          category: ['commercial'],
        },
        {
          code: 'resTorch',
          icon: '/static/img/services/ResTorch/icon.png',
          img: '/static/img/services/ResTorch/project.jpg',
          name: {
            en: 'Torch-On Roofing',
            zhs: '烫胶屋顶',
            zht: '烫胶屋顶'
          }, 
          /*
          detail: {
            en: 'We help you to install and maintain this type of roof.',
            zhs: '一种塑胶底的防水屋顶。跟沥青片和瓦片不同的地方在于他的安装。这种屋顶是烧上去的，不是钉上去或卡上去的。如果屋顶是平顶的，这可能是最好的屋顶材质选项',
            zht: '一種塑膠底的防水屋頂。跟瀝青片和瓦片不同的地方在於他的安裝。這種屋頂是燒上去的，不是釘上去或卡上去的。如果屋頂是平頂的，這可能是最好的屋頂材質選項.'
          },
          */
          detail: {
            en: '<p>We offers complete SBS system for flat or low slope roofing. ' +
          'Generally, the complete SBS system contains a flexible SBS elastomeric bitumen waterproofing membrane with a non-woven polyester reinforcement. '+
          'Both sides are protected by a thermofusible film. Also, there is another layer of SBS elastomeric bitumen waterproofing membranes with a non-woven polyester reinforcement. '+
          'The topside is protected by slate chippings and the underside by a thermofusible film.</p>'+
          '<ul>Benefits:'+ 
            '<li>High performance: Non-woven polyester reinforcement of 180 g/m² offers excellent static and dynamic puncture resistance.</li>'+
            '<li>Versatility: Designed to have a perfect adaptability to weather and movement of the substrate.</li>'+
            '<li>Reliability and durability: Made from selected bitumen and polymers containing additives, which give a high resistance to weathering.</li>'+
            '<li>Easy to apply: Underside and overlap protected by a thermofusible film for a quick and safe use with torch-on techniques. The topside is covered by slate chippings for the protection of the membrane against external elements and UV.</li>'+
          '</ul>',
          },  
          category: ['residential'],
        },
        {
          code: 'commSingle',
          icon: '/static/img/services/commSingle/icon.png',
          img: '/static/img/services/commSingle/project.jpg',
          name: {
            en: 'Single-Ply Roofing',
            zhs: '单层屋面',
            zht: '單層屋面'
          }, 
          detail: {
            en: 'TO BE COPIED AND FORMATTED FROM EMAIL FROM JOVI',
            zhs: '单层屋顶是合成材料生产的柔性片材。提供坚固、灵活和持久的耐用性。',
            zht: '單層屋頂是合成材料生產的柔性片材，提供堅固，靈活和持久的耐用性。'
          },
          category: ['commercial'],
        },
        
        {
          code: 'green',
          icon: '/static/img/services/green/icon.png',
          img: '/static/img/services/green/project.jpg',
          name: {
            en: 'Green roof',
            zhs: '绿化屋顶',
            zht: '綠化屋頂',
          }, 
          detail: {
            en: 'A green roof or living roof is a roof of a building that is partially or completely covered with vegetation and a growing medium, planted over a waterproofing membrane.',
            zhs: '绿化屋顶是指在天台或屋顶上大规模栽种植物, 从而吸收热能，有助散热，调节雨水流量。',
            zht: '綠化屋頂是指在天台或屋頂上大規模栽種植物, 从而吸收熱能，有助散熱，調節雨水流量。',
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'insulation',
          icon: '/static/img/services/insulation/icon.png',
          img: '/static/img/services/insulation/project.jpg',
          name: {
            en: 'Insulation',
            zhs: '绝缘隔热',
            zht: '絕緣隔熱',
          }, 
          detail: {
            en: 'Good insulation will keep the building warm in winter, save power and prevent from fire hazard.',
            zhs: '良好的绝缘性将保持建筑物冬季保暖，节省电源和防止火灾的危险。',
            zht: '良好的絕緣性將保持建築物冬季保暖，節省電源和防止火災的危險。'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'inverted',
          icon: '/static/img/services/inverted/icon.png',
          img: '/static/img/services/inverted/project.jpg',
          name: {
            en: 'Inverted Roofing',
            zhs: '倒置式屋面系统',
            zht: '倒置式屋面系统'
          }, 
          detail: {
            en: 'In this type of construction the principal thermal insulation material is applied on top of the weatherproof covering so that the complete roof construction including roof covering is kept at warm temperatures during the winter months and at moderate temperatures during the summer months.',
            zhs: '这种类型的屋顶将绝缘隔热层涂附在全天候防水屋顶的顶部，从而保证屋顶冬暖夏凉',
            zht: '这种类型的屋顶将绝缘隔热层涂附在全天候防水屋顶的顶部，从而保证屋顶冬暖夏凉'
          },
          category: ['commercial'],
        },
        {
          code: 'metalRoof',
          icon: '/static/img/services/metal/icon.png',
          img: '/static/img/services/metal/project.jpg',
          name: {
            en: 'Metal Roofing',
            zhs: '金属屋顶',
            zht: '金屬屋頂'
          }, 
          detail: {
            en: 'A metal roof is a roofing system made from metal piece, or tiles. It is a component of the building envelope. It is very durable in cold weather and are 100% recyclable',
            zhs: '金属屋顶是由金属片或瓦片制成的屋面系统。金属屋顶的材质非常耐用，特别是在寒冷的天气状况下。并且金属屋顶的材料非常环保，均为可回收材料。',
            zht: '金屬屋頂是由金屬片或瓦片製成的屋面系統。金屬屋頂的材質非常耐用，特別是在寒冷的天氣狀況下。並且金屬屋頂的材料非常環保，均為可回收材料。'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'construction',
          icon: '/static/img/services/maintenance/icon.png',
          img: '/static/img/services/maintenance/project.jpg',
          name: {
            en: 'New Construction',
            zhs: '新建房屋楼宇',
            zht: '新建房屋樓宇'
          }, 
          detail: {
            en: 'Whether it’s Single or Multi-family, Development or Individually based, we are poised to take on your roofing project.',
            zhs: '无论是商业工程还是个人住家，我们都欢迎大小屋顶工程合作。',
            zht: '無論是商業工程還是個人住家，我們都歡迎大小屋頂工程合作。'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'cedarConversion',
          icon: '/static/img/services/resCedar/icon.png',
          img: '/static/img/services/resCedar/project.jpg',
          name: {
            en: 'Cedar Conversions roofing',
            zhs: '杉木屋顶翻新',
            zht: '杉木屋頂翻新'
          }, 
          detail: {
            en: 'A cedar roof conversion involves removing all existing cedar shakes and shingles on your roof and substituting it with a roofing material like GAF shingles',
            zhs: '杉木屋顶翻新通常会用先进的屋顶材料取代老化的木制屋顶。',
            zht: '杉木屋頂翻新通常會用先進的屋頂材料取代老化的木製屋頂。'
          },
          category: ['residential'],
        },
        {
          code: 'tileRoofMaintenance',
          icon: '/static/img/services/resTile/icon.png',
          img: '/static/img/services/resTile/project.jpg',
          name: {
            en: 'Tile Roof Maintenance',
            zhs: '瓦屋顶日常维护及维修',
            zht: '瓦屋顶日常維護及維修'
          }, 
          detail: {
            en: 'Tile roofs provide several significant advantages over other types. Tile constructions are resistant to pests and can withstand harsh weather conditions. They also have superior thermal properties that reduce ambient temperatures on the roof deck. Tile roofs come in a broad array of colors that can complement the appearance of your home. But perhaps most significantly, a properly installed tile roof can last more than 100 years with only modest care. ',
            zhs: '瓦屋顶通常有几个显著的优势。不但抗虫害，并能承受恶劣的天气条件，而且冬暖夏凉。但瓦屋顶需要定期的保养维护，才可以持久如新，甚至长达100年以上。',
            zht: '瓦屋頂通常有幾個顯著的優勢。不但抗蟲害，並能承受惡劣的天氣條件，而且冬暖夏涼。但瓦屋頂需要定期的保養維護，才可以持久如新，甚至長達100年以上。'
          },
          category: ['residential'],
        },
        {
          code: 'ventilation',
          icon: '/static/img/services/ventilation/icon.png',
          img: '/static/img/services/ventilation/project.jpg',
          name: {
            en: 'Ventilation',
            zhs: '通风',
            zht: '通風',
          }, 
          detail: {
            en: 'We install and maintain ventilation system to keep fresh air indoor all the time',
            zhs: '安装维护屋顶通风设备，保持室内空气清新。',
            zht: '安裝維護屋頂通風設備，保持室內空氣清新。'
          },
          category: ['residential'],
        },
        {
          code: 'skylight',
          icon: '/static/img/services/skylight/icon.png',
          img: '/static/img/services/skylight/project.jpg',
          name: {
            en: 'Skylight Installation and Repair',
            zhs: '天窗',
            zht: '天窗'
          }, 
          detail: {
            en: 'Our skylight installation let you enjoy sunshine anywhere at home.',
            zhs: '贴心设计安装天窗，让您尽情享受温哥华的温暖阳光。',
            zht: '貼心設計安裝天窗，讓您盡情享受溫哥華的溫暖陽光。'
          },
          category: ['commercial', 'residential'],
        },
        
        
        {
          code: 'syntheticSlateShakeRoofing',
          icon: '/static/img/services/syntheticSlateShake/icon.png',
          img: '/static/img/services/syntheticSlateShake/project.jpg',
          name: {
            en: 'Synthetic slate & shake roofing',
            zhs: '合成石板屋顶',
            zht: '合成石板屋顶'
          }, 
          detail: {
            en: 'Synthetic slate is considered a premium roofing product, compared to standard asphalt shingles. Many synthetic slate roofing products are guaranteed to last at least from 30 to 50 years. These low maintenance roofing tiles are designed to withstand high wind, fire, freeze-thaw cycles, and other conditions. Some roofing tiles also contain fire retardant and UV inhibitors for extra protection.',
            zhs: '合成石板被认为是优质屋面产品。许多合成石板屋面产品都保证至少要持续30至50年。这些低维护屋面瓦被设计成能承受高风，火，冻融循环，以及其他条件。一些屋顶上的瓦片也含有阻燃剂和紫外线抑制剂提供额外的保护。',
            zht: '合成石板被認為是優質屋面產品。許多合成石板屋面產品都保證至少要持續30至50年。這些低維護屋面瓦被設計成能承受高風，火，凍融循環，以及其他條件。一些屋頂上的瓦片也含有阻燃劑和紫外線抑製劑提供額外的保護。'
          },
          category: ['residential'],
        },
        
        {
          code: 'waterproofing',
          icon: '/static/img/services/waterproofing/icon.png',
          name: {
            en: 'Waterproofing',
            zhs: '防水',
            zht: '防水'
          }, 
          detail: {
            en: 'We help on waterproofing solutions to your commercial properties.',
            zhs: '我们为您的商业楼宇提供最好的防水防漏解决方案。',
            zht: '我們為您的商業樓宇提供最好的防水防漏解決方案。'
          },
          category: ['commercial'],
        },
        
        {
          code: 'commMaintenance',
          icon: '/static/img/services/maintenance/icon.png',
          img: '/static/img/services/maintenance/project.jpg',
          name: {
            en: 'Strata roof maintenance and repair',
            zhs: '日常维护及维修',
            zht: '日常維護及維修'
          }, 
          detail: {
            en: 'We provides 24 x 7 support when you need us.',
            zhs: '24小时紧急维修服务让您随时随地获得我们的支持。',
            zht: '24小時緊急維修服務讓您隨時隨地獲得我們的支持。'
          },
          category: ['commercial'],
        },
        {
          code: 'resMaintenance',
          icon: '/static/img/services/maintenance/icon.png',
          img: '/static/img/services/maintenance/project.jpg',
          name: {
            en: 'Strata roof maintenance and repair',
            zhs: '日常维护及维修',
            zht: '日常維護及維修'
          }, 
          detail: {
            en: 'We provides 24 x 7 support when you need us.',
            zhs: '24小时紧急维修服务让您随时随地获得我们的支持。',
            zht: '24小時緊急維修服務讓您隨時隨地獲得我們的支持。'
          },
          category: ['residential'],
        },
    ];

    var servicesMap = services.reduce(function(o, v, i) {
      o[v.code] = v;
      return o;
    }, {});

    var projectsMap = {
        'epdm': {
            'template': 'project.html',
            'title': 'EPDM',
            'service': 'commSingle',
            'info': 'Commercial Single Ply Roofing project',
            'folder': '/static/img/projects/commSingle/EPDM',
            'titleImg': '6.jpg',
        },
        'bridgeport': {
            'template': 'project.html',
            'title': 'Bridgeport Road Richmond',
            'service': 'commTorch',
            'info': 'More info about this project...',
            'folder': '/static/img/projects/commTorchFlat/bridgeportRichmond',
            'titleImg': '5.jpg',
        },
        'fraserSurrey': {
            'template': 'project.html',
            'title': 'Fraser Highway Surrey',
            'service': 'commTorch',
            'info': 'More info about this project...',
            'folder': '/static/img/projects/commTorchFlat/fraserSurrey',
            'titleImg': '9.jpg',
        },
        'oakVancouver': {
            'template': 'project.html',
            'title': 'Oak Street Vancouver',
            'service': 'commTorch',
            'info': 'More info about this project...',
            'folder': '/static/img/projects/commTorchFlat/oakVancouver',
            'titleImg': '4.jpg',
        },
        'vanturaAbbortsford': {
            'template': 'project.html',
            'title': 'Vantura Road, Abbortsford',
            'service': 'commTorch',
            'info': 'More info about this project...',
            'folder': '/static/img/projects/commTorchFlat/vanturaAbbortsford',
            'titleImg': '5.jpg',
        },
        'green': {
            'template': 'project.html',
            'title': 'Green Roof',
            'service': 'green',
            'info': 'More info about this project...',
            'folder': '/static/img/projects/green',
            'titleImg': '1.jpg',
        },
        'insulation': {
            'template': 'project.html',
            'title': 'Insulation',
            'service': 'insulation',
            'info': 'More info about this project...',
            'folder': '/static/img/projects/insulation',
            'titleImg': '4.jpg',
        },
        'liquid': {
            'template': 'project.html',
            'title': 'Samlin Dr, Vancouver',
            'service': 'metalRoof',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/liquid',
            'titleImg': '5.jpg',
        },
        'metal1': {
            'template': 'project.html',
            'title': 'Metal roofing project',
            'service': 'metalRoof',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/metal/proj1',
            'titleImg': '2.jpg',
        },
        'metal2': {
            'template': 'project.html',
            'title': 'W 21 Street, Vancouver',
            'service': 'metalRoof',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/metal/w21Vancouver',
            'titleImg': '3.jpg',
        },
        'new1': {
            'template': 'project.html',
            'title': 'New Construction Project',
            'service': 'construction',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/newConstruction/proj1',
            'titleImg': '2.jpg',
        },
        'new2': {
            'template': 'project.html',
            'title': 'W 29 Steet, Vancouver',
            'service': 'construction',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/newConstruction/w29Vancouver',
            'titleImg': '8.jpg',
        },
        'resCedar1': {
            'template': 'project.html',
            'title': 'Semana Crescent, Vancouver',
            'service': 'cedarConversion',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resCedar/semanaVancouver',
            'titleImg': '5.jpg',
        },
        'resCedar2': {
            'template': 'project.html',
            'title': 'Dease Place, Coquitlam',
            'service': 'cedarConversion',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resCedar/deaseCoquitlam',
            'titleImg': '5.jpg',
        },
        'resCedar3': {
            'template': 'project.html',
            'title': 'Sicamous Aveue, Coquitlam',
            'service': 'cedarConversion',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resCedar/sicamousCoquitlam',
            'titleImg': '3.jpg',
        },
        'resCedar4': {
            'template': 'project.html',
            'title': 'No. 2, Richmond',
            'service': 'cedarConversion',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resCedar/no2Richmond',
            'titleImg': '4.jpg',
        },
        'resTile1': {
            'template': 'project.html',
            'title': 'Arrowsmith Place, Coquitlam',
            'service': 'tileRoofMaintenance',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resTile/arrowsmithCoquitlam',
            'titleImg': '4.jpg',
        },
        'resTile2': {
            'template': 'project.html',
            'title': 'Residential Tile Roof Maintenance',
            'service': 'tileRoofMaintenance',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resTile/proj1',
            'titleImg': '9.jpg',
        },
        'resTorch1': {
            'template': 'project.html',
            'title': 'Rayside street, Burnaby',
            'service': 'resTorch',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resTorch/raysideBurnaby',
            'titleImg': '6.jpg',
        },
        'resTorch2': {
            'template': 'project.html',
            'title': 'Grant street, Burnaby',
            'service': 'resTorch',
            'info': 'More info about this project...',            
            'folder': '/static/img/projects/resTorch/grantBurnaby',
            'titleImg': '9.jpg',
        },

    };
    return {
        slides: slides,
        services: function(category){
          return services.filter(function(s){
            return s.category.indexOf(category) >= 0;
          });
        },
        serviceCategories: serviceCategories,
        serviceHighlight: ['commTorch', 'skylight', 'insulation', 'ventilation'].map(function(serviceId){
          return servicesMap[serviceId];
        }),
        serviceDetail: function(serviceId){
          return servicesMap[serviceId];
        },
        projectSummary: Object.keys(projectsMap).map(function(projectId){
          var summary = projectsMap[projectId];
          summary.projectId = projectId;
          return summary;
        }),
        projectHighlight: ['liquid', 'green', 'insulation'].map(function(projectId){
          var summary = projectsMap[projectId];
          summary.projectId = projectId;
          return summary;
        }),
        projectDetail: function(projectId){return projectsMap[projectId];}
    };
})

