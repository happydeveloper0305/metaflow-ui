//
// Default language
//
const en = {
  translation: {
    items: {
      flow: 'Flow',
      run: 'Run',
      step: 'Step',
      task: 'Task',
      artifact: 'Artifact',
      metadata: 'Metadata',
    },

    home: {
      home: 'Home',
      'show-all-runs': 'Show all runs',
      'new-run-available': 'New runs at the top',
      'scroll-to-top': 'Scroll to top',
      'no-timeframe-warning': 'Handling runs without a Time frame can be slow.',
    },

    help: {
      'quick-links': 'Quick links',
      timezone: 'Timezone',
      'local-time': 'Local time',
      'local-timezone': 'Local timezone',
      'selected-time': 'Selected timezone',
      timezones: 'Timezones',
      notifications: 'Notifications',
      documentation: 'Documentation',
      help: 'Help',
      'application-version': 'Application version',
      'service-version': 'Service version',
    },

    fields: {
      group: {
        none: 'No grouping',
        flow: 'Group by flow',
        user: 'Group by user',
      },

      flow: 'Flow',
      user: 'User',
      tag: 'Tag',
      project: 'Project',
      branch: 'Branch',
      'user-tags': 'User tags',
      tasks: 'Tasks',

      flow_id: 'Flow',

      id: 'ID',
      status: 'Status',
      'started-at': 'Started at',
      'finished-at': 'Finished at',
      language: 'Language',
      duration: 'Duration',

      'artifact-name': 'Artifact name',
      location: 'Location',
      'datastore-type': 'Datastore type',
      type: 'Type',
      'content-type': 'Content type',

      'run-id': 'Run ID',
      'task-id': 'Task ID',
      content: 'Content',
    },

    filters: {
      'group-by': 'Group by',
      'reset-all': 'Reset view',
      running: 'Running',
      failed: 'Failed',
      completed: 'Completed',
    },

    run: {
      'run-details': 'Details',
      'no-run-data': 'No run data',
      'no-tags': 'No user tags',
      'no-system-tags': 'No system tags',
      'no-metadata': 'No run metadata found',
      'metadata-not-available': 'Metadata not available for this attempt.',
      'failed-to-load-metadata': 'Failed to load metadata',
      DAG: 'DAG',
      'dag-not-available': 'DAG is currently not available',
      'dag-only-available-AWS': 'DAG is only available when flow is executed on AWS.',
      'dag-data-not-available':
        "DAG structure data doesn't exists. Data is only available when flow is executed on AWS",
      'developer-comment': 'Developer comment',
      timeline: 'Timeline',
      parameters: 'Parameters',
      'no-parameters': 'No run parameters.',
      'run-parameters-error': 'Problem loading run parameters.',
      'show-run-details': 'Show run details',
      'hide-run-details': 'Hide run details',
      tags: 'User tags',
      'system-tags': 'System tags',
      'select-all-tags': 'Select all tags',
      'scroll-to-bottom': 'Scroll to bottom',
      'show-fullscreen': 'Show fullscreen',
      'filter-all': 'All',
      'filter-completed': 'Completed',
      'filter-running': 'Running',
      'filter-failed': 'Failed',
      'filter-pending': 'Pending',
      'filter-unknown': 'Unknown',
      mode: 'Mode',
      overview: 'Workflow',
      monitoring: 'New tasks',
      'error-tracker': 'Failed tasks',
      custom: 'Custom',
    },

    timeline: {
      'no-run-data': 'No run data. You can wait if this run is created and see live updates.',
      'no-rows': 'No tasks found',
      'hidden-by-settings': 'rows are hidden by selected settings',
      'expand-all': 'Expand all',
      'collapse-all': 'Collapse all',
      relative: 'Relative',
      absolute: 'Absolute',
      'group-by-step': 'Group by step',
      'order-by': 'Order by',
      'started-at': 'Started at',
      startTime: 'Started at',
      'finished-at': 'Finished at',
      endTime: 'Finished at',
      duration: 'Duration',
      zoom: 'Zoom',
      'fit-to-screen': 'Fit to screen',
      'zoom-in': 'Zoom in',
      'zoom-out': 'Zoom out',
      fullscreen: 'Fullscreen',
      'show-all-steps': 'Show all steps',
      'order-tasks-by': 'Order tasks by',
      status: 'Status',
      'tasks-visibility': 'Task visibility',
      grouped: 'Group by step',
      'not-grouped': 'Not grouped',
      asc: 'Ascending',
      desc: 'Descending',
    },

    task: {
      'task-details': 'Task details',
      loading: 'Loading task data',
      'no-task-selected': 'No task selected',
      'could-not-find-task': 'Could not find the task',
      'task-info': 'Task info',
      links: 'Links',
      'std-out': 'stdout',
      'std-err': 'stderr',
      artifacts: 'Artifacts',
      'search-tasks-tip': 'Search: artifact_name:value',
      'no-logs': 'No logs',
      'no-preload-logs': 'No logs. Logs will be checked again momentarily',
      'logs-only-available-AWS': 'Logs were not found from AWS.',
      attempt: 'Attempt',
      'copy-logs-to-clipboard': 'Copy to clipboard',
      'all-logs-copied': 'Full log copied to clipboard',
      'line-copied': 'Line copied to clipboard',
      'copy-to-clipboard': 'Copy to clipboard',
      'download-artifact-content': 'Download artifact content',
      'download-logs': 'Download logs as txt file',
      'downloading-logs': 'Downloading logs as txt file',
      'waiting-for-task-to-start': 'Waiting for task to start',
      'artifact-copied': 'Artifact content copied to clipboard',
      'show-fullscreen': 'Show logs in fullscreen',
      'no-artifacts-found': 'No artifacts found',
      'artifact-remote': 'Remote',
      'artifact-local': 'Local',
      metadata: 'Metadata',
      'failed-to-load-metadata': 'Failed to load metadata',
      'metadata-not-loaded': 'Metadata not loaded',
      'show-task-metadata': 'Show task metadata',
      'hide-task-metadata': 'Hide task metadata',
      'poll-loader-msg': 'New logs are fetched in 20 seconds intervals',
      'ui-content': 'UI Content',
      'unable-to-find-status': 'Unable to find status for this task',
    },

    breadcrumb: {
      'no-match': "Text doesn't match known patterns.",
      goto: 'Go to...',
      whereto: 'Where to?',
      'example-flow': 'Flow Name',
      'example-run': 'Flow Name / Run ID',
      'example-step': 'Flow Name / Run ID / Step Name',
      'example-task': 'Flow Name / Run ID / Step Name / Task ID',
    },

    search: {
      search: 'Search',
      artifact: 'Artifact',
      artifactInfo: 'You can wrap value "" to search for an exact match.',
      'no-results': 'No search results',
      'no-tasks': 'No tasks with selected settings',
      'failed-to-search': 'Failed to search',
    },

    connection: {
      connected: 'Connected for real-time updates',
      'waiting-for-connection': 'Waiting for connection',
      'data-might-be-stale': 'Reconnected, but data might be stale. Click here to reconnect',
    },

    status: {
      fail: 'failed',
    },

    error: {
      'error-details': 'Error details',
      details: 'Details',
      'show-more-details': 'Show error details',
      'hide-more-details': 'Hide error details',
      'generic-error': 'Error happened',
      'load-error': 'Error loading data',
      'no-results': 'No results found',
      'no-runs': 'No runs found',
      'no-tasks': 'No tasks found',
      'not-found': 'Not available',
      'dag-not-found': 'DAG visualization is not available for this run',
      'dag-not-found-running': 'DAG visualization was not found for this run. Try again later.',
      'stack-trace': 'Stack trace',
      'copy-stack-trace': 'Copy error stack trace',
      'stack-trace-copied': 'Stack trace copied',
      'download-stack-trace': 'Download stack trace',

      'failed-to-load-dag': 'Failed to load DAG.',
      's3-access-denied': 'Access denied. There was a problem with AWS credentials.',
      's3-not-found': 'S3 bucket was not found.',
      's3-bad-url': 'Error in S3 URL.',
      's3-missing-credentials': 'Server is missing AWS credentials.',
      's3-generic-error': 'There was an error on S3 access.',
      'dag-unsupported-flow-language': 'Unsupported language. DAG is only supported for flows ran with Python.',
      'dag-processing-error': 'DAG was found but something went wrong with processing the data.',

      'log-error-s3': 'There was a problem loading logs from AWS',
      'log-error': 'There was a problem loading logs.',

      'application-error':
        'Application encountered an unexpected error. This should not happen and might be caused by unexpected data.',
      'sidebar-error':
        'Sidebar encountered an unexpected error. This should not happen and might be caused by unexpected data or parameters.',
      'home-error':
        'Run listing encountered an unexpected error. This should not happen and might be caused by unexpected data.',
      'run-header-error':
        'Run info section encountered an unexpected error. This should not happen and might be caused by unexpected data.',
      'dag-error':
        'DAG encountered an unexpected error. This should not happen and might be caused by unexpected data.',
      'timeline-error':
        'Timeline encountered an unexpected error. This should not happen and might be caused by unexpected data.',
      'task-error':
        'Task page encountered an unexpected error. This should not happen and might be caused by unexpected data.',

      'artifact-too-large': 'File too large to display, use the client to access this object.',
      'artifact-not-accessible': 'Artifact location is not accessible by the server.',
      'artifact-handle-failed': 'Reading the artifact content failed.',
      'artifact-unknown-error': 'Unexpected error happened while loading artifacts.',

      'no-run-version-info':
        'Since this run did not record Metaflow version, some information might be partially missing or incorrect.',
      'old-metaflow-client-warning':
        'Since this run was launched using a pretty old version of Metaflow, some information may be incomplete. Please update your Metaflow to the <1>latest version</1>.',
      'local-datastore-warning':
        'Since this run uses local datastore instead of cloud services, some information might be partially missing or incorrect.',
    },

    notifications: {
      dateMissing: 'Date missing',
      header: 'Notifications',
      published: 'Published',
      unsorted: 'Unsorted',
    },

    component: {
      show: 'Show',
      hide: 'Hide',
      startTime: 'Start time',
      endTime: 'End time',
      cancel: 'Cancel',
      set: 'Set',
    },

    date: {
      'select-preset': 'Select preset',
      month: 'Last 30 days',
      twoweeks: 'Last 14 days',
      yesterday: 'Yesterday',
      today: 'Today',
    },
    debug: {
      title: 'Debug',
      feature_flags: 'Feature flags',
      log_recording: 'Log recording',
      start_recording: 'Start recording',
      stop_recording: 'Stop recording',
      recording_logs: 'Recording logs',
      stop_and_download: 'Stop and download logs',
      stop_and_discard: 'Stop and discard logs',
      DAG_msg: 'New tab in runs view which has graphical presentation of the run.',
      RUN_GROUPS_msg: 'Grouping feature for runs list on home page.',
      TASK_METADATA_msg: 'Show metadata for each task on task view.',
      TIMELINE_MINIMAP_msg: 'Show rough presentation of lines in timeline minimap.',
      ARTIFACT_TABLE_msg: 'Show artifact table on task view.',
      ARTIFACT_SEARCH_msg: 'Enable search field in timeline view to filter tasks by artifact values.',
      DEBUG_VIEW_msg: 'Expose this view in help menu as a link.',
      CACHE_DISABLE_msg: 'Disable cache from server side.',
      DB_LISTEN_DISABLE_msg: 'Disable real time update features from database.',
      HEARTBEAT_DISABLE_msg: 'Disable heartbeat for tasks and runs.',
      PREFETCH_DISABLE_msg: 'Disable preloading data to cache service.',
      REFINE_DISABLE_msg: 'Disable refined queries for tasks and artifacts.',
      S3_DISABLE_msg: 'Disable fetching extra data from AWS S3.',
      WS_DISABLE_msg: 'Disable websocket real time messaging.',
      generic_msg: 'Value of feature flag can be changed server side.',
      logging_msg:
        'Logging can be used to gather information in problem situations. Logging will record all HTTP and websocket traffic which can then be downloaded as text files even in case of application crash.',
    },
  },
};

// This model should be used for additional languages to come. For example to add finnish
// language, add file fi.ts and define translation object as const fi: TranslationModel = ....
export type TranslationModel = typeof en;

export default en;