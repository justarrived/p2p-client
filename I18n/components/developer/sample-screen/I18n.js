import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    job: {
      when_will_job_be_performed: 'When will the job be performed',
      create_job: 'Create job',
      location: 'Location',
      where_will_the_job_be_performed: 'Where will be the job be performed',
      job_duration: 'Job duration',
      job_preview: 'Job preview',
      status: {
        active: 'Active',
        completed: 'Completed',
        unassigned: 'Unassigned',
      },
      rating: {
        how_did_the_worker_perform_the_job: 'How did the worker perfom the job?',
        communication: 'Communication',
        work_quality: 'Work quality',
        punctuality: 'Punctuality',
        rate_worker_and_write_review: 'Please rate worker and write a short review!',
        write_short_review_here: 'Write your short review here',
        no_rating_yet: 'No rating yet',
        thank_you: 'Thank you!',
      },
    },
    categories: {
      shoveling: {
        title: 'Snow shoveling',
        description: 'Get help in the snow!',
      },
      raking: {
        title: 'Leaf raking',
        description: 'Get help with leaves!',
      },
      cleaning: {
        title: 'Cleaning',
        description: 'Get help with cleaning!',
      },
      weeding: {
        title: 'Grass weeding',
        description: 'Get help with grass weeding!',
      },
    },
    size: {
      small: {
        estimated_duration: 'Small, 1-2 hours',
        cost: '(150 - 300 SEK)',
      },
      medium: {
        estimated_duration: 'Medium, 2-3 hours',
        cost: '(300 - 450 SEK)',
      },
      large: {
        estimated_duration: 'Large, 3+ hours',
        cost: '(450+ SEK)',
      },
    },
    section_headings: {
      active_jobs: 'Active jobs',
      archived_jobs: 'Completed jobs',
      unassigned_jobs: 'Unassigned jobs',
    },
    account: {
      first_name: 'First name',
      last_name: 'Last name',
      address: 'Address',
      city: 'City',
      postal_code: 'Postal code',
      phone_number: 'Phone number',
      email: 'Email',
      password: 'Password',
      profile_info: 'Profile info',
      payment_info: 'Payment info',
    },
    screen_titles: {
      choose_job_type: 'Choose Job Type',
      create_job: 'Create Job',
      login: 'Login',
      create_account: 'Create Account',
      job_preview: 'Job Preview',
      my_jobs: 'My Jobs',
      job_info: 'Job Info',
      my_profile: 'My Profile',
      rate_worker: 'Rate Worker',
      choose_language: 'Choose Language',
      choose_worker: 'Choose Worker',
    },
    navigation_tabs: {
      create_job: 'Create Job',
      my_job: 'My Jobs',
      my_profile: 'My Profile',
    },
    login: {
      sign_in_button: 'Sign in',
      remember_me: 'Remember me',
      forgot_password_button: 'Forgot password',
      create_account_button: 'Create account',
    },
    sign_up: {
      sign_up_button: 'Sign up',
      already_have_an_account_button: 'Already have an account - Sign in',
      accept_pul_and_terms: 'I accept the PUL and Terms of Use',
    },
    date_and_time: {
      date: 'Date',
      time: 'Time',
      calendar: 'Calendar',
    },
    button_actions: {
      done: 'Done',
      edit: 'Edit',
      cancel: 'Cancel',
      save: 'Save',
    },
    card: {
      card_holder: 'Card holder',
      card_number: 'Card number',
      expiration_date_placeholder: 'MM/YY',
      save_card: 'Save card',
      pay: 'Pay',
      master_card: 'Master card',
      visa_card: 'Visa card',
      add_credit_card: 'Add credit card',
    },
    language: {
      language_displayed_in_app: 'Language that will be displayed in the app',
    },
  },
};

export default I18n;
