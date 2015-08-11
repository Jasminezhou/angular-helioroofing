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
          icon: '/static/img/services/commTorchFlat/icon.png',
          img: '/static/img/services/commTorchFlat/project.jpg',
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
          '<h5>Benefits:</h5><ul>'+ 
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
          icon: '/static/img/services/resTorch/icon.png',
          img: '/static/img/services/resTorch/project.jpg',
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
          '<h5>Benefits:</h5><ul>'+ 
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
            en: '<p>EPDM single-ply membranes have been the commercial roofing industry’s material of choice for nearly half a century. Today, we offer the most high-performance, energy-efficient, sustainable and innovative line of EPDM membranes and accessories on the market. From Factory-Applied Tape for stronger, more dependable seams to the industry’s only ENERGY-STAR®-qualified EPDM membrane. So when you need a sustainable, long-lasting rooftop, look no further than the single-ply membrane with nearly a half-century track record of performance and durability --> EPDM.</p> </br> <p>Thermoplastic polyolefin (TPO) is the fastest-growing segment of the commercial roofing industry, and we are able to offer this type of roofing material. TPO white and tan membranes are ENERGY STAR®-qualified and Cool Roof Rating Council (CRRC)-certified, and have been directly attributed to a reduction in energy use and cooling costs for buildings in warm climates. </p> </br> <h4>Benefits</h4> <h5>COST EFFECTIVE</h5> <ul> <li>Application techniques offer fast track installation on every project specified, creating real value by reducing site labour time. Additionally the rapid installation programme often permits early fit-out below, keeping work to programme and reducing the time to completion and hand-over.</li> <li>The lightweight system allows for other building materials and structural steel to be reduced at the building’s conceptual stage.</li> <li>Single ply is ideal for new build or refurbishment projects.</li> </ul> </br> <h5>DURABLE</h5> <ul> <li>Hot air welding for the seams provides a strong and reliable bond that is well recognised in the single ply roofing industry. The fused overlapping membrane sheets provide a homogenous layer and total waterproofing security.<li> <li>With high tensile strength in excess of 1200N for Thermoplan and 1100N for Thermofol, the closed fibre pre-coated polyester cross-weave reinforces the membranes and makes them resistant to tears and punctures.<li> <li>The membranes have been developed to withstand climatic extremes and temperature shocks.<li> </ul> </br> <h5>CHEMICALLY RESISTANT</h5> <ul> </li>Our use of high quality polymers and constituents in the formula ensures the membranes remain flexible to at least -30 degrees centigrade.</li> </ul> </br> <h5>FLAME-FREE INSTALLATION</h5> <ul> <li>The seams are thermally welded with hot air replacing traditional torching methods, bringing its installation in line with the outlook for safety conscious practice.</li> </ul> </br> <h5>RESISTANT TO NATURAL ELEMENTS</h5> <ul> <li>The integrated woven lattice reinforcements within the membrane, together with the high performance fastening system and strong homogenous welded seams combine to eliminate the risk of wind uplift failure.</li> <li>The reflective pearl white finish of the Thermoplan pearl-white membrane reduces solar gain, minimising thermal and structural movement in the construction.</li> <li>The FPO and PVC formulations ensure full resistance to micro-organism attack which is vital to their success in ballasted or green roof situations.</li> </ul> </br> <h5>FIRE RESISTANCE</h5> <ul> <li>To provide maximum fire resistance, our formulation includes a high performance halogen-free fire retardant which means the membrane carries a FAB fire rating.</li> <li>Our choice of fire retardant reduces the volume of product required allowing for a greater percentage of active polymer in the formulation.</li> </ul> <h5>ENVIRONMENTAL CREDENTIALS</h5> <ul> <li>Thermoplan T contains no heavy metals, halogens or plasticisers.</li> <li>Thermoplan T has one of the lowest production embodied energy values.</li> <li>The reflectivity of Thermoplan T reduces solar gain and contributes to energy conservation within the building.</li> </ul> <h5>PRACTICAL SUSTAINABILITY</h5> <ul> <li>Thermoplan T is 100% recyclable and can be reprocessed at our manufacturing plant.</li> <li>PVC membranes can be recycled and converted in to other components such as protective or separation layers for roofs.</li> <li>Putting an extensive green roof on top of a single ply system provides an area of natural habitat for plants and small wildlife.  </li> <li>An extensive green roof will protect the waterproofing membrane from climatic extremes, ultra-violet light and mechanical damage, significantly increasing the life expectancy of the system.</li> <li>With an extensive green roof, all the additional environmental benefits are gained including reduction in rain water run-off which humidifies the air helping to reduce the ‘heat island’ effect.</li> <li>An extensive green roof, ballasted or paved finish will considerably reduce sound from both inside and outside the building.</li> </ul>',
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
            en: 'A green roof or living roof is a roof of a building that is partially or completely covered with vegetation and a growing medium, planted over a waterproofing membrane. <h5>Benefits</h5> <ul> <li>Less air pollution and greenhouse gas is produced when cooling demands are lowered.</li> <li>Green roofs can beautify an environment.</li> <li>Green roofs can reduce and slow stormwater runoff.</li> <li>A green roofs acts as an insulator for a building which reduces heating and cooling demands.</li> <li>Green roofs improve indoor comfort by reducing heat transfer, resulting in a more comfortable temperature.</li> </ul>',
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
            en: '<p>Thermal insulation in buildings is an important factor to achieving thermal comfort for its occupants. Insulation reduces unwanted heat loss or gain and can decrease the energy demands of heating and cooling systems. It does not necessarily deal with issues of adequate ventilation and may or may not affect the level of sound insulation.</p> <h5>Benefits</h5> <ul> <li>Insulation acts as a barrier to heat loss and heat gain, particularly in roofs and ceilings, walls and floors.</li> <li>In many homes insulation is the most practical and cost effective way to make a house more energy efficient, keeping it cooler in summer and warmer in winter and saving up to 40 per cent in heating and cooling bills. In addition, insulation may reduce condensation in the home. This can provide health benefits by reducing mould and damp.</li>',
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
            en: '<p>In this type of construction the principal thermal insulation material is applied on top of the weatherproof covering so that the complete roof construction including roof covering is kept at warm temperatures during the winter months and at moderate temperatures during the summer months.<p> <h5>Benefits</h5> <p>The advantages of the inverted roof reveal themselves when compared to any other flat roof solution. Because of the danger of condensation, the complex structural design, and the problematic breathability, the double shell cold roof, as a possible structural design solution for flat roofs, is not commonly used. Even though it provides a perfect solution, the straight layer order type of the single shell warm roof has a shorter life expectancy due to the water insulation’s exposure to weather and its implementation without mechanical protection in general, and in the case of failure it is also harder to find and repair the damage. The inverted flat roof answers all physical, implementation, and operational/usage problems by placing the thermal insulation above the water insulation. The temperature of the thermally insulated waterproofing membrane is roughly the same during the whole year, and in addition to the appropriate mechanical protection, the insulation also provides protection against UV radiation.</p>',
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
            en: 'A metal roof is a roofing system made from metal piece, or tiles. It is a component of the building envelope. It is very durable in cold weather and are 100% recyclable <h5>Benefits</h5> <ul> <li>Proven performance expectation of 50+ years </li> <li>Beautiful styles to match any home or neighborhood </li> <li>Interlocking panels for maximum wind resistance </li> <li>Fire resistance </li> <li>Energy efficiency by keeping homes cooler </li> <li>Low weight to help preserve structural integrity and life</li> </ul>',
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
            en: '<p>Ventilating is the process of "processing" or replacing air in any space to provide high indoor air quality (i.e. to control temperature, replenish oxygen, or remove moisture, odors, smoke, heat, dust, airborne bacteria and carbon dioxide). Ventilation is used to remove unpleasant smells and excessive moisture, introduce outside air, to keep interior building air circulating, and to prevent stagnation of the interior air.</p> <h5>Benefits.</h5> <ul> <li>It helps reduce damaging moisture. Excessive moisture can build up in the attic, potentially damaging the structure and degrading the roof system. It can also lead to mold.</li> <li>It can help save energy. Heat build-up in that attic comes at a cost—a home’s air conditioning has to work harder to cool down the house, especially the living space below the attic.</li> <li>It helps prevent damage to the roof shingles. High attic heat can bake the shingle and cause them to prematurely age. In fact, most major shingle manufacturers strongly recommend proper attic ventilation on asphalt shingle installations.</li> </ul>',
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
            en: "<p>Our skylight installation let you enjoy sunshine anywhere at your property.</p> <p>Our skylight repair prevent water leak inside your property. </p> <h5>Benefits</h5> <ul> <li>Energy Efficiency by reducing the demand for unsustainable power that is currently challenging the health of the world's environment.</li> <li>Optimal daylight</li> <li>Save Money</li> <li>Ventilation by an electric venting skylight which will opens to produce a \"passive air conditioner\".</li> </ul>",
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
            en: "</p>Synthetic slate is considered a premium roofing product, compared to standard asphalt shingles. Many synthetic slate roofing products are guaranteed to last at least from 30 to 50 years. These low maintenance roofing tiles are designed to withstand high wind, fire, freeze-thaw cycles, and other conditions. Some roofing tiles also contain fire retardant and UV inhibitors for extra protection.</p> <ul> <li>Synthetic slate is considered a \"green\" building alternative—even those that use virgin materials—because all types of synthetic slate can be recycled at the end of a roof's usable life.</li> <li>Synthetic slate shingles are more durable than authentic slate, as they contain advanced ultraviolet inhibitors to reduce wear from the sun.</li> <li>Safety is built-in. Synthetic slate typically contains impact modifiers to help withstand storm damage; in fact, most are certified by Underwriters Laboratories for Class 4 impact resistance, the highest level for roofing materials. Many synthetic slates also have the highest fire-resistance rating—Class A—which means they're effective against severe exposure to external fires, are not readily flammable and do not spread fire.</li> <li>Transportation and installation of synthetic slate shingles is easier and less expensive than other roofing materials. Synthetic slate shingles are lighter than all asphalt shingles and, at 1.25 pounds per tile, are only a quarter the weight of authentic slate shingles. Their light weight also means that a standard roof structure can support synthetic slate shingles with no special reinforcement, making them practical for mainstream residential construction. During installation, synthetic slate shingles can easily be field- cut with a utility knife and nailed into place with standard roofing nails and a pneumatic nail gun. These characteristics are in sharp contrast with those of authentic slate installation, which requires precision cutting and nailing of heavy shingles that chip and crack easily.</li> </ul>",
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
            en: "<p>Dampproofing is a coating, usually asphalt-based, that is either sprayed on or hand applied to the outside of the wall. Though less frequently recommended in modern residential construction, it is still an acceptable form of treatment in many situations. The drawbacks include an inability to seal larger cracks or holes left by form ties and the potential for damage by coarse or careless backfill. But with proper surface drainage, correctly installed foundation drains at the footing, and the absence of hydrostatic pressure to drive water infiltration, dampproofing can supply adequate and long-lasting protection for many crawl spaces and basements.</p> <p>Waterproofing a foundation requires the same care as dampproofing in regard to surface treatment and drain pipe, but is much more exacting in the treatment of the wall itself. Obviously, if there is any doubt about whether or not dampproofing will do the job, it's best to spend the extra time and money to waterproof, particularly for habitable space.</p>",
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
            en: "<p>A roof everyday exposures to sun, rain, air conditioning repair people, and other wear and tear slowly ages the roof until the service life ends. Every extra year one can eke out of the roof is that much more money that can be saved for other purposes. A roof does need regular check-ups in the form of regular inspections and prompt repairs. </p> <h5>Benefits</h5> <ul> <li>Why scheduled roof maintenance? <p>The questions always come up... \"Why should I spend money on something that isn't leaking?\" or \"Can you prove there is a return on the money spent?\" or \"Why do I need maintenance if I have a warranty?\"</p> </li> <li>There is an answer for all these questions. <p>The life of your roof is directly related to how often it is inspected and how quickly small problems are identified and repaired.  The data shown that their average roof lasted less than five years before leakage occurred and less than eight years before replacement. It also has shown that as many as 35% of all roofs do not reach their expectancy. </p> </li> </ul> <p>Our goal at Comprehensive Roof Maintenance is to educate as many owners and building managers to the fact that programmed roof maintenance makes economic sense.  A roof inspected semi-annually or annually can last as much as 50% longer than one that is visited only when there is a leak. Maintenance with documentation provides you with a written history of repairs, a projected life expectancy, and clear budget numbers for future expenditures. It gives you both knowledge and control. It protects your asset and provides value.</p>",
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

