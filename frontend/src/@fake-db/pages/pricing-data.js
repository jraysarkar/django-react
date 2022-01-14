import mock from '../mock'

const data = {
  pricing: {
    basicPlan: {
      title: 'IDS',
      img: require('@src/assets/images/illustration/IDS-logo-FAAF06DF38-seeklogo.com.png').default,
      subtitle: 'Data Detection by IDS System',
      // monthlyPrice: 0,
      yearlyPlan: {
      //  perMonth: 0,
        // totalAnnual: 0
      },
      table: [
        'Time-stamp: 2021-11-09 14:50:07',
        'Threat type: Stealer',
        'Traget Endpoint: Null',
        'Traget IP: 160.44.201.156',
        'Traget OS: Null',
        'ANS: Null',
        'Attacker MAC address: 12:34:56:78:9a:bc',
        'Attacker Hostname/IP: 172.18.0.4',
        'Severty Label: Low' 
      ],
      popular: false
    },
    standardPlan: {
      title: 'ML Detecttion',
      img: require('@src/assets/images/illustration/Machine-learning-scaled.png').default,
      subtitle: 'Data Detection by Machine Learning',
      // monthlyPrice: 49,
      yearlyPlan: {
        // perMonth: 40,
        // totalAnnual: 480
      },
      table: [
        'Time-stamp: 2021-11-09 14:50:07',
        'Threat type: Stealer',
        'Traget Endpoint: Null',
        'Traget IP: 160.44.201.156',
        'Traget OS: Null',
        'ANS: Null',
        'Attacker MAC address: 12:34:56:78:9a:bc',
        'Attacker Hostname/IP: 172.18.0.4',
        'Severty Label: Low'
      ],
      popular: true
    },
    enterprisePlan: {
      title: 'DL Detection',
      img: require('@src/assets/images/illustration/deeplearning.png').default,
      subtitle: 'Data Detection by Deep Learning',
      // monthlyPrice: 99,
      yearlyPlan: {
        // perMonth: 80,
        // totalAnnual: 960
      },
      table: [
        'Time-stamp: 2021-11-09 14:50:07',
        'Threat type: Stealer',
        'Traget Endpoint: Null',
        'Traget IP: 160.44.201.156',
        'Traget OS: Null',
        'ANS: Null',
        'Attacker MAC address: 12:34:56:78:9a:bc',
        'Attacker Hostname/IP: 172.18.0.4',
        'Severty Label: Low'
      ],
      popular: false
    },
    qandA: [
      {
        question: 'Does my subscription automatically renew?',
        ans:
          'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      },
      {
        question: 'Can I store the item on an intranet so everyone has access?',
        ans:
          'Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding.'
      },
      {
        question: 'Am I allowed to modify the item that I purchased?',
        ans:
          'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
      }
    ]
  }
}

mock.onGet('/pricing/data').reply(() => [200, data.pricing])
