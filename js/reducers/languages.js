import { ADD_LANGUAGE, REMOVE_LANGUAGE } from '../actions/languages';

// TODO Replace static initial state with real data from API.
const initialState = {
  lang: [0, 2],
  languages: {
    data: [
      {
        id: '156',
        type: 'languages',
        attributes: {
          lang_code: 'sv',
          direction: 'ltr',
          system_language: true,
          local_name: 'Svenska',
          en_name: 'Swedish',
          sv_name: 'Svenska',
          ar_name: 'السويدية',
          fa_name: 'سوئدی',
          fa_af_name: 'سوئدی',
          ku_name: 'Swedish',
          ti_name: 'ስዊድንኛ',
          ps_name: 'سویډنی',
          name: 'Swedish',
          language_id: 38,
          translated_text: {
            name: 'Swedish',
            language_id: 38,
          },
        },
        relationships: {
          language: {
            data: {
              id: '38',
              type: 'languages',
            },
          },
        },
        links: {
          self: 'https://just-match-api-sandbox.herokuapp.com/api/v1/languages/156',
        },
      },
      {
        id: '38',
        type: 'languages',
        attributes: {
          lang_code: 'en',
          direction: 'ltr',
          system_language: true,
          local_name: 'English',
          en_name: 'English',
          sv_name: 'Engelska',
          ar_name: 'الإنجليزية',
          fa_name: 'انگلیسی',
          fa_af_name: 'انگلیسی',
          ku_name: 'English',
          ti_name: 'እንግሊዝኛ',
          ps_name: 'انګلیسي',
          name: 'English',
          language_id: 38,
          translated_text: {
            name: 'English',
            language_id: 38,
          },
        },
        relationships: {
          language: {
            data: {
              id: '38',
              type: 'languages',
            },
          },
        },
        links: {
          self: 'https://just-match-api-sandbox.herokuapp.com/api/v1/languages/38',
        },
      },
      {
        id: '7',
        type: 'languages',
        attributes: {
          lang_code: 'ar',
          direction: 'rtl',
          system_language: true,
          local_name: 'العربية',
          en_name: 'Arabic',
          sv_name: 'Arabiska',
          ar_name: 'العربية',
          fa_name: 'عربی',
          fa_af_name: 'عربی',
          ku_name: 'Arabic',
          ti_name: 'ዐርቢኛ',
          ps_name: 'عربي',
          name: 'Arabic',
          language_id: 38,
          translated_text: {
            name: 'Arabic',
            language_id: 38,
          },
        },
        relationships: {
          language: {
            data: {
              id: '38',
              type: 'languages',
            },
          },
        },
        links: {
          self: 'https://just-match-api-sandbox.herokuapp.com/api/v1/languages/7',
        },
      },
    ],
    meta: {
      total: 1,
      current_page: 1,
      total_pages: 1,
    },
  },
};

export default function (state = initialState, action) {
  if (action.type === REMOVE_LANGUAGE) {
    // console.log(`splice lang ${action.payload}`);
    state.lang.splice(state.lang.indexOf(action.payload), 1);
    // Have to create a new state in order for components to update correctly
    return {
      ...state,
      lang: [...state.lang],
    };
  }
  if (action.type === ADD_LANGUAGE) {
    // console.log(`push lang ${action.payload}`);
    return {
      ...state,
      lang: [...state.lang, action.payload],
    };
  }
  return state;
}
