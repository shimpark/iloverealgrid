/*eslint-disable*/

//33
var fields = [
  {
    fieldName: 'favorite',
    dataType: 'boolean',
  },
  {
    fieldName: 'project_code',
  },
  {
    fieldName: 'year',
  },
  {
    fieldName: 'project_name',
  },
  {
    fieldName: 'project_leader',
  },
  {
    fieldName: 'corporation',
  },
  {
    fieldName: 'department',
  },
  {
    fieldName: 'status',
  },
  {
    fieldName: 'client',
  },
  {
    fieldName: 'client_type',
  },
  {
    fieldName: 'sales',
    dataType: 'number',
  },
  {
    fieldName: 'internal_sales',
    dataType: 'number',
  },
  {
    fieldName: 'total_sales',
    dataType: 'number',
  },
  {
    fieldName: 'expense',
    dataType: 'number',
  },
  {
    fieldName: 'internal_expense',
    dataType: 'number',
  },
  {
    fieldName: 'total_expense',
    dataType: 'number',
  },
  {
    fieldName: 'profit_margin',
    dataType: 'number',
  },
  {
    fieldName: 'profit_loss',
    dataType: 'number',
  },
  {
    fieldName: 'amount',
    dataType: 'number',
  },
  {
    fieldName: 'contract_start_date',
    dataType: 'datetime',
  },
  {
    fieldName: 'contract_end_date',
    dataType: 'datetime',
  },
  {
    fieldName: 'project_type',
  },
  {
    fieldName: 'customer_type',
  },
  {
    fieldName: 'client_manager',
  },
  {
    fieldName: 'collaboration_team',
  },
  {
    fieldName: 'competition_notes',
  },
  {
    fieldName: 'manager',
  },
  {
    fieldName: 'proposal_budget',
    dataType: 'number',
  },
  {
    fieldName: 'competitive',
  },
  {
    fieldName: 'proposal_deadline',
    dataType: 'datetime',
  },
  {
    fieldName: 'pt_schedule',
    dataType: 'datetime',
  },
  {
    fieldName: 'sme_bid',
    dataType: 'boolean',
  },
  {
    fieldName: 'proposal_result',
  },
  {
    fieldName: 'project_editable',
    dataType: 'boolean',
  },
];

var columns = [
  {
    name: 'favorite',
    fieldName: 'favorite',
    header: {
      text: '즐겨찾기',
    },
    width: 70,
    editable: false,
    renderer: {
      type: 'icon',
      iconCallback: function (grid, cell) {
        var iconValue = cell.value == false ? 'falseIcon' : 'trueIcon';
        return '/images/' + iconValue + '.png';
      },
      iconLocation: 'center',
      iconHeight: 15,
      iconWidth: 15,
    },
  },
  {
    name: 'project_code',
    fieldName: 'project_code',
    header: {
      text: '프로젝트 코드',
    },
    mergeRule: {
      criteria: 'value',
    },
    mergeEdit: true,
    width: 100,
    autoFilter: true,
    editable: false,
  },
  {
    name: 'year',
    fieldName: 'year',
    header: {
      text: '년도',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    lookupDisplay: true,
    values: ['2020', '2021', '2022', '2023', '2024', '2025'],
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    editor: {
      type: 'dropdown',
    },
    editable: true,
  },
  {
    name: 'project_name',
    fieldName: 'project_name',
    header: {
      text: '프로젝트명',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'project_leader',
    fieldName: 'project_leader',
    header: {
      text: '프로젝트 리더',
    },
    width: 100,
    autoFilter: true,
    button: 'action',
    buttonVisibility: 'always',
    editable: true,
  },
  {
    name: 'corporation',
    fieldName: 'corporation',
    header: {
      text: '법인',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    lookupDisplay: true,
    values: ['대학내일'],
    labels: ['대학내일'],
    editor: {
      type: 'dropdown',
    },
    editable: true,
  },
  {
    name: 'department',
    fieldName: 'department',
    header: {
      text: '부서',
    },
    width: 100,
    autoFilter: true,
    button: 'action',
    buttonVisibility: 'always',
    editable: true,
  },
  {
    name: 'status',
    fieldName: 'status',
    header: {
      text: '상태',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    lookupDisplay: true,
    values: ['검토중', '실행중', '영업', '수주'],
    labels: ['검토중', '실행중', '영업', '수주'],
    editor: {
      type: 'dropdown',
    },
    editable: true,
  },
  {
    name: 'client',
    fieldName: 'client',
    header: {
      text: '거래처',
    },
    width: 100,
    autoFilter: true,
    button: 'action',
    buttonVisibility: 'always',
    editable: true,
  },
  {
    name: 'client_type',
    fieldName: 'client_type',
    header: {
      text: '거래처유형',
    },
    width: 100,
    autoFilter: true,
    editable: false,
  },
  {
    name: 'sales',
    fieldName: 'sales',
    header: {
      text: '매출',
    },
    width: 100,
    defaultValue: 0,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'internal_sales',
    fieldName: 'internal_sales',
    header: {
      text: '내부매출',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'total_sales',
    fieldName: 'total_sales',
    header: {
      text: '대학내일\n매출합계',
      styleName: 'multi-line-css',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'expense',
    fieldName: 'expense',
    header: {
      text: '지출',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'internal_expense',
    fieldName: 'internal_expense',
    header: {
      text: '내부지출',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'total_expense',
    fieldName: 'total_expense',
    header: {
      text: '지출합계',
    },
    width: 100,
    autoFilter: true,
    editable: false,
  },
  {
    name: 'profit_margin',
    fieldName: 'profit_margin',
    header: {
      text: '이익율',
    },
    width: 100,
    autoFilter: true,
    editable: false,
  },
  {
    name: 'profit_loss',
    fieldName: 'profit_loss',
    header: {
      text: '손익',
    },
    width: 100,
    autoFilter: true,
    editable: false,
  },
  {
    name: 'amount',
    fieldName: 'amount',
    header: {
      text: '금액',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'contract_start_date',
    fieldName: 'contract_start_date',
    datetimeFormat: 'yyyy.MM.dd',
    header: {
      text: '계약 시작일',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    editor: {
      type: 'date',
    },
    editable: true,
  },
  {
    name: 'contract_end_date',
    fieldName: 'contract_end_date',
    datetimeFormat: 'yyyy.MM.dd',
    header: {
      text: '계약 종료일',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    editor: {
      type: 'date',
    },
    editable: true,
  },
  {
    name: 'project_type',
    fieldName: 'project_type',
    header: {
      text: '프로젝트 유형',
    },
    width: 100,
    autoFilter: true,
    button: 'action',
    buttonVisibility: 'always',
    editable: true,
  },
  {
    name: 'customer_type',
    fieldName: 'customer_type',
    header: {
      text: '고객 유형',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    lookupDisplay: true,
    values: ['정부', '금융', 'IT', '의료', '교육기관'],
    labels: ['정부', '금융', 'IT', '의료', '교육기관'],
    editor: {
      type: 'dropdown',
    },
    editable: true,
  },
  {
    name: 'client_manager',
    fieldName: 'client_manager',
    header: {
      text: '거래처\n담당자',
      styleName: 'multi-line-css',
    },
    footer: {
      text: '거래처\n담당자',
      styleName: 'multi-line-css',
    },
    width: 100,
    autoFilter: true,
    button: 'action',
    buttonVisibility: 'always',
    editable: true,
  },
  {
    name: 'collaboration_team',
    fieldName: 'collaboration_team',
    header: {
      text: '협업팀',
    },
    width: 100,
    autoFilter: true,
    button: 'action',
    buttonVisibility: 'always',
    editable: true,
  },
  {
    name: 'competition_notes',
    fieldName: 'competition_notes',
    header: {
      text: '경업이슈참고사항',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'manager',
    fieldName: 'manager',
    header: {
      text: '담당자',
    },
    width: 100,
    autoFilter: true,
    editable: false,
  },
  {
    name: 'proposal_budget',
    fieldName: 'proposal_budget',
    header: {
      text: '제안예산',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'competitive',
    fieldName: 'competitive',
    header: {
      text: '경쟁 여부',
    },
    width: 100,
    autoFilter: true,
    editable: true,
  },
  {
    name: 'proposal_deadline',
    fieldName: 'proposal_deadline',
    datetimeFormat: 'yyyy.MM.dd',
    header: {
      text: '제안마감일',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    editor: {
      type: 'date',
    },
    editable: true,
  },
  {
    name: 'pt_schedule',
    fieldName: 'pt_schedule',
    datetimeFormat: 'yyyy.MM.dd',
    header: {
      text: 'PT 일정',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    editor: {
      type: 'date',
    },
    editable: true,
  },
  {
    name: 'sme_bid',
    fieldName: 'sme_bid',
    header: {
      text: '중소기업 경쟁입찰',
    },
    width: 100,
    autoFilter: true,
    editable: false,
    renderer: {
      type: 'check',
    },
    editable: true,
  },
  {
    name: 'proposal_result',
    fieldName: 'proposal_result',
    header: {
      text: '제안 결과 (셀 추가)',
    },
    width: 100,
    autoFilter: true,
    editButtonVisibility: 'always',
    lookupDisplay: true,
    values: ['수주', '미수주', '검토중'],
    labels: ['수주', '미수주', '검토중'],
    editor: {
      type: 'dropdown',
    },
    editable: true,
  },
  {
    name: 'project_editable',
    fieldName: 'project_editable',
    visible: false,
    editable: false,
  },
];

var layout = [
  {
    name: 'default',
    direction: 'horizontal',
    items: [
      'favorite',
      'project_code',
      'year',
      'project_name',
      'project_leader',
      'corporation',
      'department',
      'status',
      'client',
      'client_type',
      'sales',
      'internal_sales',
      'total_sales',
      'expense',
      'internal_expense',
      'total_expense',
      'profit_margin',
      'profit_loss',
      'amount',
      'project_editable',
    ],
    header: {
      text: '기본',
    },
  },
  {
    name: 'particular',
    direction: 'horizontal',
    items: [
      'contract_start_date',
      'contract_end_date',
      'project_type',
      'customer_type',
      'client_manager',
      'collaboration_team',
      'competition_notes',
    ],
    header: {
      text: '상세',
    },
  },
  {
    name: 'proposal',
    direction: 'horizontal',
    items: [
      'manager',
      'proposal_budget',
      'competitive',
      'proposal_deadline',
      'pt_schedule',
      'sme_bid',
      'proposal_result',
    ],
    header: {
      text: '제안',
    },
  },
];

var httpRequest;

/**
 * 데이터 파일을 서버에서 가져오는 함수
 * @param {string} filename - 가져올 데이터 파일명 (예: index_data.json)
 * @description XMLHttpRequest를 사용하여 서버의 data 폴더에서 JSON 파일을 비동기로 로드합니다.
 */
function setProvider(filename) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = loadData;
  httpRequest.open('GET', '/data/' + filename);
  httpRequest.send();
}

/**
 * 서버에서 받은 데이터를 그리드에 로드하는 함수
 * @description XMLHttpRequest의 상태 변화를 감지하여 데이터 로딩이 완료되면
 * JSON 데이터를 파싱하고 그리드에 적용한 후 전체 유효성 검사를 실행합니다.
 */
function loadData() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var data = JSON.parse(httpRequest.responseText);
      dataProvider.setRows(data);
      gridView.refresh();

      //전체유효성 검사
      gridView.validateCells();
    }
  }
}

var dataProvider, gridContainer, gridView;

/**
 * RealGrid를 생성하고 초기 설정을 구성하는 메인 함수
 * @param {string} container - 그리드가 렌더링될 HTML 컨테이너의 ID
 * @description
 * 1. LocalDataProvider와 GridView 인스턴스를 생성
 * 2. 필드와 컬럼 설정을 적용
 * 3. 그리드의 기본 옵션들을 설정 (편집, 행 높이, 스타일 등)
 * 4. 이벤트 핸들러들을 등록
 * 5. 즐겨찾기 필터와 컨텍스트 메뉴를 설정
 * 6. 개인화 설정을 로드하고 초기 데이터를 가져옵니다
 */
function createGrid(container) {
  // 그리드 생성 시 Undo / Redo 속성이 설정(true)
  dataProvider = new RealGrid.LocalDataProvider(true);
  gridView = new RealGrid.GridView(container);
  gridView.setDataSource(dataProvider);

  dataProvider.setFields(fields);
  gridView.setColumns(columns);
  //레이아웃을 사용하면 컬럼 고정이 안됨
  //gridView.setColumnLayout(layout);

  gridView.displayOptions.emptyMessage = '표시할 데이타가 없습니다.';
  gridView.displayOptions.useAlternateRowStyle = false;
  gridView.displayOptions.rowHeight = 35; // 병합 내부 포커스 숨기기
  gridView.displayOptions.showInnerFocus = false;
  gridView.displayOptions.selectionStyle = 'rows';

  gridView.header.heights = [35, 35];
  gridView.header.height = 35;

  gridView.footer.height = 35;
  gridView.stateBar.width = 16;
  // ⭐ 편집 옵션 활성화 (중요!)
  gridView.editOptions.insertable = true;
  gridView.editOptions.appendable = true;
  gridView.editOptions.editable = true;
  gridView.editOptions.updatable = true;

  // 행 삭제이지만 표기만 함.
  dataProvider.softDeleting = true;
  gridView.hideDeletedRows = false;

  //gridView.groupPanel.visible = true;

  gridView.stateBar.visible = true;
  gridView.checkBar.visible = false;
  //컬럼 전체 숫자 포맷 적용
  gridView.formatOptions.numberFormat = '#,##0';

  // ⭐ 그리드 편집 옵션 활성화 (필수)
  gridView.editOptions.editable = true;
  gridView.editOptions.updatable = true;

  // mergeEdit 기능 활성화
  gridView.editOptions.commitByCell = true;

  //복원 모드
  dataProvider.restoreMode = 'auto';

  // 현재 행이 편집중인 상태일 때 행 값을 수정 전 값으로 되돌립니다.
  gridView.undoable = true;

  gridEvent();
  setProvider('index_data.json');

  //즐겨찾기 컬럼 필드 적용
  var filters = [
    {
      name: '비활성화',
      criteria: 'not value',
    },
    {
      name: '활성화',
      criteria: 'value',
    },
  ];
  gridView.setColumnFilters('favorite', filters);

  // ⭐ 컨텍스트 메뉴 이벤트 핸들러 설정
  gridView.onContextMenuPopup = function (grid, x, y, elementName) {
    // 수정모드가 아닐 경우 컨텍스트 메뉴 표시하지 않음
    if (!isEditMode) {
      return false;
    }

    if (elementName.cellType == 'header') {
      grid.setCurrent({ column: grid.mouseToIndex(x, y).column });
      setContextHeaderMenu(gridView);
    } else if (elementName.cellType == 'indicator') {
      grid.setCurrent({ column: grid.mouseToIndex(x, y).column });
      setContextIndicatorMenu(gridView);
    } else {
      return false;
    }
  };

  gridView.onContextMenuItemClicked = function (grid, item, clickData) {
    console.log('3. onContextMenuItemClicked', item, clickData);
    onContextMenuClick(grid, item, clickData);
  };

  // 초기 보기모드 설정
  setViewMode();
}

/**
 * 페이지 초기화를 시작하는 함수
 * @description
 * 페이지가 로드되면 자동으로 호출되어 RealGrid를 생성하고
 * 저장된 개인화 설정들을 selectbox에 로드합니다.
 * 이 함수는 window.onload 이벤트에 연결되어 있습니다.
 */
function start() {
  createGrid('realgrid');

  // TODO 4: 페이지 로딩 시 저장된 개인화 설정들을 selectbox에 로드
}

// $.document.ready(start);
window.onload = start;
// domloaded를 대신 써도 됩니다.

window.onunload = function () {
  dataProvider.clearRows();

  gridView.destroy();
  dataProvider.destroy();

  gridView = null;
  dataProvider = null;
};

/**
 * 그리드 헤더에서 우클릭 시 표시되는 컨텍스트 메뉴를 설정하는 함수
 * @param {Object} grid - RealGrid 인스턴스
 * @description
 * 헤더 셀에서 우클릭 시 다음 메뉴들을 제공합니다:
 * 1. 컬럼 고정/고정 해제
 * 2. 컬럼 표시/숨김 설정
 * 3. 컬럼 필터 켜기/끄기
 * 4. 모든 컬럼 표시
 */
function setContextHeaderMenu(grid) {
  console.log('2. setContextHeaderMenu', grid);

  var columns = grid.getColumnNames();

  var row = grid.getCurrent().itemIndex + 1;

  var visibleContextMenu = [];

  for (var i in columns) {
    var menuItem = {};
    var checked;

    var columns = gridView.getColumnNames();

    var column = grid.layoutByName(columns[i]);
    if (column.column) {
      menuItem.label = column.lastColumn.header.text;
      menuItem.tag = column.lastColumn.name;
      menuItem.type = 'check';
      menuItem.checked = column.visible;

      visibleContextMenu.push(menuItem);
    }
  }

  visibleContextMenu.push(
    {
      label: '-',
    },
    {
      label: '컬럼 모두 보기',
      tag: 'columnShow',
    },
    {
      label: '-',
    },
    {
      label: '현재 컬럼 필터 켜기',
      tag: 'autoFilter',
    },
    {
      label: '현재 컬럼 필터 끄기',
      tag: 'autoFilterFalse',
    }
  );

  var column = grid.columnByName(grid.getCurrent().column);
  // 열 고정, 해제
  var contextMenu = [
    {
      label: '고정',
      tag: 'colFixed',
    },
    {
      label: '고정 해제',
      tag: 'cancelColFixed',
      enabled: grid.fixedOptions.colCount != 0,
    },
    {
      label: '컬럼',
      tag: 'columnMenu',
      children: visibleContextMenu,
    },
  ];
  grid.setContextMenu(contextMenu);
}

/**
 * 그리드 인디케이터(행 번호)에서 우클릭 시 표시되는 컨텍스트 메뉴를 설정하는 함수
 * @param {Object} grid - RealGrid 인스턴스
 * @description
 * 인디케이터 셀에서 우클릭 시 다음 메뉴들을 제공합니다:
 * 1. 행 추가/추가 취소
 * 2. 행 삭제/삭제 취소
 * 3. 행 고정/고정 해제
 */
function setContextIndicatorMenu(grid) {
  console.log('2. setContextIndicatorMenu', grid);

  var columns = grid.getColumnNames();

  var row = grid.getCurrent().itemIndex + 1;

  for (var i in columns) {
    var menuItem = {};
    var checked;

    var columns = gridView.getColumnNames();

    var column = grid.layoutByName(columns[i]);
    if (column.column) {
      menuItem.label = column.lastColumn.header.text;
      menuItem.tag = column.lastColumn.name;
      menuItem.type = 'check';
      menuItem.checked = column.visible;
    }
  }

  var column = grid.columnByName(grid.getCurrent().column);
  // 행 고정, 해제
  var contextMenu = [
    {
      label: '행추가',
      tag: 'insertRow',
    },
    // {
    //   label: '행추가 취소',
    //   tag: 'cancelInsertRow',
    // },
    {
      label: '행삭제',
      tag: 'deleteRow',
    },
    {
      label: '행삭제 취소',
      tag: 'cancelDeleteRow',
    },
    {
      label: '고정',
      tag: 'rowFixed',
    },
    {
      label: '고정 해제',
      tag: 'cancelRowFixed',
      enabled: grid.fixedOptions.rowCount != 0,
    },
  ];
  grid.setContextMenu(contextMenu);
}

/**
 * 컨텍스트 메뉴 항목 클릭 시 실행되는 이벤트 핸들러 함수
 * @param {Object} grid - RealGrid 인스턴스
 * @param {Object} data - 클릭된 메뉴 항목의 데이터
 * @param {Object} index - 클릭된 메뉴 항목의 인덱스
 * @description
 * 컨텍스트 메뉴에서 선택된 항목에 따라 다음 작업들을 수행합니다:
 * 1. 행/컬럼 고정 및 해제
 * 2. 행 추가/삭제 및 취소
 * 3. 컬럼 필터 켜기/끄기
 * 4. 컬럼 표시/숨김
 * 5. 모든 컬럼 표시
 */
function onContextMenuClick(grid, data, index) {
  console.log('4. onContextMenuClick', data, index);

  var cell = grid.getCurrent();
  var col = grid.columnByName(cell.column);

  // data.parent 에 Tag 속성이 없어 switch문 전에 확인한다.
  // parent에 Tag가 추가되면 switch 문에서 처리하자.
  if (
    data.parent.label == '컬럼' &&
    data.tag !== 'columnShow' &&
    data.tag !== 'autoFilter' &&
    data.tag !== 'autoFilterFalse'
  ) {
    grid.layoutByName(data.tag).visible = data.checked;
  }

  switch (data.tag) {
    case 'rowFixed':
      grid.setFixedOptions({ rowCount: cell.itemIndex + 1 });
      break;
    case 'cancelRowFixed':
      grid.setFixedOptions({ rowCount: 0 });
      break;
    case 'colFixed':
      //grid.setFixedOptions({ colCount: col.index + 1 });
      grid.setFixedOptions({ colCount: col.displayIndex + 1 });
      break;
    case 'cancelColFixed':
      grid.setFixedOptions({ colCount: 0 });
      break;
    case 'cancelFixed':
      grid.setFixedOptions({ colCount: 0, rowCount: 0 });
      break;
    case 'insertRow':
      var curr = grid.getCurrent();
      if (curr.itemIndex > -1) {
        dataProvider.insertRow(curr.dataRow, {});
      }
      break;
    // case 'cancelInsertRow':
    //   var curr = grid.getCurrent();
    //   console.log('cancelInsertRow', curr);
    //   if (curr.itemIndex > -1) {
    //     dataProvider.softDeleting = false;
    //     dataProvider.removeRow(curr.dataRow);
    //     dataProvider.softDeleting = true;
    //   }
    //   break;
    case 'deleteRow':
      if (grid.getCurrent().itemIndex > -1) {
        let curr = grid.getCurrent();

        var project_editable = gridView.getValues(curr.itemIndex).project_editable;
        if (!project_editable) {
          alert('이 프로젝트는 삭제할 수 없습니다. 편집 권한이 없습니다.');
        } else {
          //var jsonData = dataProvider.getJsonRow(curr.dataRow);
          //console.log('deleteRow', jsonData);
          dataProvider.removeRow(curr.dataRow);
        }
      }
      break;
    case 'cancelDeleteRow':
      var curr = gridView.getCurrent();
      dataProvider.setRowState(curr.dataRow, 'none');
      break;
    case 'excelExport':
      exportExcel(grid);
      break;
    case 'autoFilter': {
      col.autoFilter = true;
      grid.refresh();
      break;
    }
    case 'autoFilterFalse': {
      col.autoFilter = false;
      grid.refresh();
      break;
    }
    case 'columnHide':
      col.visible = false;
      break;
    case 'columnShow':
      {
        var layout = grid.getColumnNames();
        for (var i in layout) {
          gridView.layoutByName(layout[i]).visible = true;
        }
      }
      break;
  }
}

/**
 * 그리드의 다양한 이벤트들을 설정하는 함수
 * @description
 * 그리드에서 발생하는 다음 이벤트들을 처리합니다:
 * 1. 셀 버튼 클릭 이벤트
 * 2. 셀 클릭 이벤트 (즐겨찾기 토글)
 * 3. 컬럼 유효성 검사 이벤트
 * 4. 동적 셀 스타일 적용 이벤트
 * 5. 에디터 표시 제어 이벤트 (편집 권한 체크)
 */
function gridEvent() {
  // 데이터 로드 완료 시 첫 번째 개인화 설정 적용
  gridView.onDataLoadComplated = (grid) => {
    loadPersonalizedSettings();

    const firstKey = Object.keys(personalizedList)[0];
    if (firstKey) {
      applyPersonalizedSettings(firstKey);
      console.log('첫 번째 개인화 설정이 자동으로 적용되었습니다:', firstKey);
    }
  };

  gridView.onCellButtonClicked = function (grid, index, column) {
    alert(column.header.text + '컬럼의 itemIndex: ' + index.itemIndex + ' 행이 클릭되었습니다.');
  };

  gridView.onCellClicked = function (grid, clickData) {
    if (clickData.dataRow > -1 && clickData.fieldName == 'favorite') {
      var value = dataProvider.getValue(clickData.dataRow, clickData.fieldName);
      if (value) {
        dataProvider.setValue(clickData.dataRow, clickData.fieldName, !value);
      } else {
        dataProvider.setValue(clickData.dataRow, clickData.fieldName, !value);
      }
    }
  };

  //유효성 검사
  gridView.onValidateColumn = function (grid, column, inserting, value, itemIndex, dataRow) {
    var error = {};
    if (column.fieldName === 'sales') {
      if (value < 500000) {
        error.level = 'error';
        error.message = '매출은 500,000 이상이여야 합니다.';
      } else if (value > 1000000) {
        error.level = 'warning';
        error.message = '매출은 1,000,000 이하여야 합니다.';
      }
    }
    return error;
  };

  //동적 스타일
  gridView.setCellStyleCallback(function (grid, dataCell) {
    var invalidCells = gridView.getInvalidCells();
    var invalidRows = [];

    if (invalidCells) {
      for (var i = 0; i < invalidCells.length; i++) {
        invalidRows.push(invalidCells[i].dataRow);
      }
    }
    //유효성 검사 실패 스타일
    if (
      invalidRows.indexOf(dataCell.index.dataRow) > -1 &&
      dataCell.index.column.fieldName === 'sales'
    ) {
      return { style: { background: 'rgba(255,0,0,0.5)' } };
    } else if (dataCell.isValueChanged() && dataCell.index.fieldName != 'favorite') {
      //dataCell.isValueChanged() 수정된 셀 스타일 적용
      return { style: { background: 'rgba(255,255,0,0.5)' } };
    }
  });

  gridView.onShowEditor = function (grid, index, props, attrs) {
    console.log('onShowEditor 호출됨:', index);

    var dataRow = grid.getDataRow(index.itemIndex);

    // 추가모드
    if (dataRow === -1) {
      // 편집 모드일 때만 행 추가 가능
      return isEditMode;
    }

    // 1. 전체 편집 모드 체크
    if (!isEditMode) {
      //console.log('보기 모드입니다. 편집이 불가능합니다.');
      return false;
    }

    var columnName = index.column;

    // 2. 컬럼별 편집 권한 체크 (columns[]의 editable 속성)
    if (!isColumnEditable(columnName)) {
      //console.log('컬럼이 편집 불가능합니다:', columnName);
      return false;
    }

    // 3. 행별 편집 권한 체크 (기존 project_editable 로직)
    var rowData = dataProvider.getJsonRow(dataRow);
    if (rowData && typeof rowData.project_editable === 'boolean') {
      if (!rowData.project_editable) {
        //console.log('해당 행은 편집 권한이 없습니다.');
        return false;
      }
    }

    //console.log('편집이 허용됩니다:', columnName);
    return true;
  };
}

var userCount = 1;
var personalizedList = {};

// TODO 4: 페이지 로딩 시 저장된 개인화 설정들을 selectbox에 로드
/**
 * localStorage에서 저장된 개인화 설정들을 로드하는 함수
 * @description
 * 페이지 로딩 시 호출되어 다음 작업들을 수행합니다:
 * 1. localStorage에서 개인화 설정과 사용자 카운터를 가져옴
 * 2. 저장된 설정이 없으면 빈 객체로 초기화
 * 3. userCount를 저장된 값으로 복원하거나 계산
 * 4. selectbox에 저장된 개인화 설정들을 옵션으로 추가
 * 5. 첫 번째 설정이 있으면 자동으로 적용
 * 6. 저장된 설정이 없으면 "기본 레이아웃" 더미 옵션 추가
 */
function loadPersonalizedSettings() {
  try {
    console.log('loadPersonalizedSettings');
    const savedSettings = localStorage.getItem('realgrid_personalized_settings');
    const savedCounter = localStorage.getItem('realgrid_user_counter');

    if (savedSettings) {
      personalizedList = JSON.parse(savedSettings);
      userCount = parseInt(savedCounter, 10);
    } else {
      // 빈 객체로 초기화 (배열이 아님)
      personalizedList = {};
      userCount = 1;
    }

    const keys = Object.keys(personalizedList).filter((key) => key.startsWith('personalize'));
    if (keys.length > 0) {
      const maxNum = Math.max(...keys.map((key) => parseInt(key.replace('personalize', ''))));
      userCount = maxNum + 1;
    } else {
      userCount = 1;
    }

    const select = document.getElementById('personalizedList');
    while (select.options.length > 0) {
      select.remove(0);
    }

    // 저장된 설정이 없는 경우, 더미 '기본 레이아웃' 옵션만 추가
    if (Object.keys(personalizedList).length === 0) {
      const defaultOption = document.createElement('option');
      defaultOption.value = 'default';
      defaultOption.text = '기본 레이아웃';
      select.appendChild(defaultOption);
      select.value = 'default';
      console.log('저장된 개인화 설정이 없어 더미 "기본 레이아웃" 옵션을 추가합니다.');
    } else {
      // 저장된 설정이 있다면 모두 로드
      Object.keys(personalizedList).forEach(function (key) {
        const option = document.createElement('option');
        option.value = key;
        option.text = personalizedList[key].name;
        select.appendChild(option);
      });

      // 첫 번째 개인화 설정을 자동으로 적용
      const firstKey = Object.keys(personalizedList)[0];
      if (firstKey) {
        select.value = firstKey;
        console.log('첫 번째 개인화 설정이 자동으로 적용되었습니다:', firstKey);
      }
    }
  } catch (error) {
    alert('개인화 설정 로드 중 오류가 발생했습니다. 기본 레이아웃으로 초기화합니다.');
    console.error('개인화 설정 로드 중 오류 발생:', error);
    personalizedList = {};
    userCount = 1;
    //localStorage.removeItem('realgrid_personalized_settings');
    //localStorage.removeItem('realgrid_user_counter');
  }
}

// TODO 5: 개인화 설정 저장 함수 (userCount도 함께 저장)
/**
 * 개인화 설정과 사용자 카운터를 localStorage에 저장하는 함수
 * @description
 * 개인화 설정이 변경될 때마다 호출되어 다음 데이터들을 저장합니다:
 * 1. personalizedList 객체를 JSON 문자열로 변환하여 저장
 * 2. userCount 값을 문자열로 변환하여 저장
 * 3. 저장 성공/실패 여부를 콘솔에 로그로 기록
 */
function savePersonalizedSettings() {
  try {
    localStorage.setItem('realgrid_personalized_settings', JSON.stringify(personalizedList));
    localStorage.setItem('realgrid_user_counter', userCount.toString()); // userCount 저장
    console.log('개인화 설정 및 userCount가 localStorage에 저장되었습니다.');
  } catch (error) {
    console.error('localStorage 저장 중 오류 발생:', error);
  }
}

// TODO 3: 개인화 설정 이름을 표시용으로 변환하는 헬퍼 함수
/**
 * 개인화 설정 키를 사용자에게 보여줄 표시명으로 변환하는 헬퍼 함수
 * @param {string} key - 개인화 설정의 키 값
 * @returns {string} 사용자에게 보여줄 표시명
 * @description
 * 개인화 설정의 키를 다음과 같이 변환합니다:
 * 1. personalizedList에 해당 키가 있고 'name' 속성이 있으면 그 값을 반환
 * 2. 'personalize' + 숫자 형태의 키는 '개인화' + 숫자로 변환 (구버전 호환성)
 * 3. 위 조건에 해당하지 않으면 원본 키를 그대로 반환
 */
function getPersonalizationDisplayName(key) {
  // 1. personalizedList에 해당 키가 있고, 그 객체 안에 'name' 속성이 있는지 먼저 확인합니다.
  if (personalizedList && personalizedList[key] && personalizedList[key].name) {
    // 'name' 속성이 있으면 그 값을 반환합니다.
    // 예: personalizedList['default'].name -> "기본 레이아OUT" 반환
    return personalizedList[key].name;
  }

  // 2. 'name' 속성이 없는 경우 (구버전 데이터 호환용) 기존 로직을 실행합니다.
  const match = key.match(/^personalize(\d+)$/);
  if (match) {
    return '개인화' + match[1];
  }

  // 3. 위 두 조건에 모두 해당하지 않으면 원본 키를 반환합니다.
  return key;
}

// TODO 5: 기본 레이아웃으로 리셋하는 함수
/**
 * 그리드를 기본 레이아웃 상태로 초기화하는 함수
 * @description
 * 그리드의 모든 개인화 설정을 제거하고 기본 상태로 되돌립니다:
 * 1. 모든 컬럼의 자동 필터를 비활성화
 * 2. 행 그룹핑을 제거
 * 3. 정렬을 제거
 * 4. 행/컬럼 고정을 해제
 * 5. 행 높이를 기본값(35px)으로 설정
 * 6. 컬럼 레이아웃을 기본값으로 리셋
 */
function resetToDefaultLayout() {
  // 모든 필터 제거
  for (var i = 0; i < gridView.getColumns().length; i++) {
    gridView.columnByName(gridView.getColumns()[i].name).autoFilter = false;
  }

  // 그룹핑 제거
  gridView.groupBy([]);

  // 정렬 제거
  gridView.orderBy([], []);

  // 고정 제거
  gridView.setFixedOptions({ colCount: 0, rowCount: 0 });

  // 기본 행 높이로 설정
  gridView.displayOptions.rowHeight = 35;

  // 기본 컬럼 레이아웃으로 리셋
  gridView.setColumnLayout(null);

  console.log('기본 레이아웃으로 리셋 완료');

  // 첫 번째 개인화 설정을 자동으로 적용
  const firstKey = Object.keys(personalizedList)[0];
  if (firstKey) {
    applyPersonalizedSettings(firstKey);
    console.log('resetToDefaultLayout -> 첫 번째 개인화 설정이 자동으로 적용되었습니다:', firstKey);
  }
}

// 현재 그리드의 상태를 객체로 반환하는 공통 함수
/**
 * 현재 그리드의 상태를 객체로 반환하는 공통 함수
 * @returns {Object} 그리드의 현재 상태 정보를 담은 객체
 * @description
 * 그리드의 현재 상태를 다음과 같이 수집합니다:
 * 1. 컬럼 레이아웃 정보
 * 2. 행 그룹핑 정보
 * 3. 정렬 정보
 * 4. 행/컬럼 고정 정보
 * 5. 행 높이 정보
 * 6. 활성화된 필터 컬럼 목록
 * 7. 각 컬럼의 활성화된 필터 항목들
 */
function getGridState() {
  //컬럼 필터 정보
  var filterColumns = [];
  for (var i = 0; i < gridView.getColumns().length; i++) {
    if (gridView.columnByName(gridView.getColumns()[i].name).autoFilter) {
      filterColumns.push(gridView.getColumns()[i].name);
    }
  }

  //각 컬럼 필터 목록(수정된 버전)
  const activeColumnFilters = filterColumns.map((col, idx) => {
    const filterList = gridView.getActiveColumnFilters(col);
    return {
      [col]: filterList,
    };
  });

  return {
    layout: gridView.saveColumnLayout(),
    rowGroup: gridView.getGroupFieldNames(),
    sort: gridView.getSortedFields(),
    colFixed: gridView.fixedOptions.colCount,
    rowFixed: gridView.fixedOptions.rowCount,
    rowHeight: gridView.displayOptions.rowHeight,
    filterColumns: filterColumns,
    activeColumnFilters: activeColumnFilters,
  };
}

/**
 * 새로운 개인화 설정을 추가하는 함수
 * @description
 * 사용자가 "개인화 새로추가" 버튼을 클릭했을 때 실행됩니다:
 * 1. 첫 번째 개인화 설정인 경우: 자동으로 "기본 레이아웃"으로 저장
 * 2. 두 번째 이후 개인화 설정: 모달 창을 통해 사용자가 직접 이름 입력
 * 3. 입력된 이름으로 새로운 개인화 설정을 생성하고 selectbox에 추가
 * 4. 설정을 localStorage에 저장하고 userCount를 증가시킴
 */
function addPersonalizedList() {
  try {
    const select = document.getElementById('personalizedList');
    const gridState = getGridState();

    // 개인화 설정이 전혀 없는 상태일 때, '기본 레이아웃'을 추가
    if (Object.keys(personalizedList).length === 0) {
      const defaultPersonalizationData = {
        ...gridState,
        createdAt: new Date().toISOString(),
        name: '기본 레이아웃',
      };
      personalizedList['default'] = defaultPersonalizationData;

      while (select.options.length > 0) {
        select.remove(0);
      }

      // 더미 옵션 삭제
      select.innerHTML = '';

      // 실제 '기본 레이아웃' 옵션 추가
      const defaultOption = document.createElement('option');
      defaultOption.value = 'default';
      defaultOption.text = '기본 레이아웃';
      select.appendChild(defaultOption);

      console.log('최초 개인화 설정이 "기본 레이아웃"으로 저장되었습니다.');
      alert('현재 그리드 상태가 "기본 레이아웃"으로 저장되었습니다.');
    } else {
      // 기존 개인화 설정이 있다면, 모달을 통해 사용자 입력 받기
      showPersonalizationModal();
      return; // 여기서 함수 종료
    }

    savePersonalizedSettings();
    select.value =
      Object.keys(personalizedList).length > 0
        ? Object.keys(personalizedList)[Object.keys(personalizedList).length - 1]
        : 'default';
  } catch (error) {
    console.error('개인화 설정 저장 중 오류 발생:', error);
    alert('개인화 설정 저장에 실패했습니다: ' + error.message);
  }
}

/**
 * 개인화 설정 이름 입력을 위한 모달 창을 표시하는 함수
 * @description
 * 모달 창을 화면에 표시하고 다음 설정을 적용합니다:
 * 1. 입력 필드를 초기화하고 포커스를 설정
 * 2. Enter 키 이벤트를 등록하여 저장 버튼 클릭과 동일하게 동작
 * 3. 모달 외부 클릭 시 자동으로 닫히도록 이벤트 설정
 * 4. 모달을 flex 형태로 표시하여 중앙 정렬
 */
function showPersonalizationModal() {
  const modal = document.getElementById('personalizationModal');
  const input = document.getElementById('personalizationName');

  // 입력 필드 초기화
  input.value = '';
  input.focus();

  // Enter 키 이벤트 추가
  input.onkeypress = function (e) {
    if (e.key === 'Enter') {
      confirmPersonalization();
    }
  };

  // 모달 외부 클릭 시 닫기
  modal.onclick = function (e) {
    if (e.target === modal) {
      closePersonalizationModal();
    }
  };

  // 모달 표시
  modal.style.display = 'flex';
}

/**
 * 개인화 설정 모달 창을 닫는 함수
 * @description
 * 모달 창을 화면에서 숨기고 닫힌 상태로 만듭니다.
 * 모달의 display 속성을 'none'으로 설정하여 완전히 숨깁니다.
 */
function closePersonalizationModal() {
  const modal = document.getElementById('personalizationModal');
  modal.style.display = 'none';
}

/**
 * 모달에서 입력된 개인화 설정 이름을 확인하고 저장하는 함수
 * @description
 * 사용자가 모달에서 입력한 이름을 검증하고 저장합니다:
 * 1. 입력값이 비어있는지 확인
 * 2. 이름 길이가 50자를 초과하지 않는지 확인
 * 3. 이미 존재하는 이름인지 중복 체크
 * 4. 모든 검증을 통과하면 새로운 개인화 설정을 생성
 * 5. selectbox에 옵션을 추가하고 모달을 닫음
 * 6. 설정을 localStorage에 저장
 */
function confirmPersonalization() {
  const input = document.getElementById('personalizationName');
  const name = input.value.trim();

  if (!name) {
    alert('개인화 설정 이름을 입력해주세요.');
    input.focus();
    return;
  }

  if (name.length > 50) {
    alert('개인화 설정 이름은 50자를 초과할 수 없습니다.');
    input.focus();
    return;
  }

  // 중복 이름 체크
  const existingNames = Object.values(personalizedList).map((item) => item.name);
  if (existingNames.includes(name)) {
    alert('이미 존재하는 개인화 설정 이름입니다. 다른 이름을 사용해주세요.');
    input.focus();
    return;
  }

  try {
    const select = document.getElementById('personalizedList');
    const gridState = getGridState();

    // 새로운 개인화 설정 생성
    const newKey = 'personalize' + userCount;
    const option = document.createElement('option');
    option.value = newKey;
    option.text = name;
    select.appendChild(option);

    const personalizationData = {
      ...gridState,
      createdAt: new Date().toISOString(),
      name: name,
    };

    personalizedList[newKey] = personalizationData;
    userCount++;

    // 모달 닫기
    closePersonalizationModal();

    // selectbox 선택값 변경
    select.value = newKey;

    console.log('새 개인화 설정 추가됨:', newKey, personalizationData);
    alert('개인화 설정이 저장되었습니다: ' + name);

    savePersonalizedSettings();
  } catch (error) {
    console.error('개인화 설정 저장 중 오류 발생:', error);
    alert('개인화 설정 저장에 실패했습니다: ' + error.message);
  }
}

/**
 * 선택된 개인화 설정을 현재 그리드 상태로 업데이트하는 함수
 * @description
 * 사용자가 "개인화 저장" 버튼을 클릭했을 때 실행됩니다:
 * 1. 선택된 개인화 설정이 없거나 "기본 레이아웃"인 경우: 새로운 "기본 레이아웃" 생성
 * 2. 기존 설정이 있는 경우: 현재 그리드 상태로 업데이트
 * 3. 기존 데이터를 삭제하고 새로운 데이터로 교체
 * 4. 업데이트된 설정을 localStorage에 저장
 */
function updatePersonalizedList() {
  try {
    const select = document.getElementById('personalizedList');
    const selectedValue = select.value;

    // 수정할 개인화 설정이 없는 경우
    if (
      !selectedValue ||
      (selectedValue === 'default' && Object.keys(personalizedList).length === 0)
    ) {
      alert(
        '수정할 개인화 설정을 선택하거나, 저장된 개인화 설정이 없어 현재 그리드 상태를 "기본 레이아웃"으로 저장합니다.'
      );
      const gridState = getGridState();
      const defaultPersonalizationData = {
        ...gridState,
        createdAt: new Date().toISOString(),
        name: '기본 레이아웃',
      };
      personalizedList['default'] = defaultPersonalizationData;
      savePersonalizedSettings();

      applyPersonalizedSettings('default');

      // 더미 옵션 삭제
      select.innerHTML = '';

      // 실제 '기본 레이아웃' 옵션 추가
      const defaultOption = document.createElement('option');
      defaultOption.value = 'default';
      defaultOption.text = '기본 레이아웃';
      select.appendChild(defaultOption);

      console.log('최초 개인화 설정이 "기본 레이아웃"으로 저장되었습니다.');
      alert('현재 그리드 상태가 "기본 레이아웃"으로 저장되었습니다.');
      return;
    }

    const gridState = getGridState();
    const originalData = personalizedList[selectedValue];

    // ⭐ 기존 객체를 삭제하지 않고 속성만 업데이트
    // 이렇게 하면 Object.keys()의 순서가 유지됩니다
    Object.assign(personalizedList[selectedValue], {
      ...gridState,
      updatedAt: new Date().toISOString(),
    });

    savePersonalizedSettings();

    alert('"' + originalData.name + '" 설정이 현재 상태로 업데이트되었습니다.');
    console.log('개인화 설정이 업데이트되었습니다: ' + selectedValue);
  } catch (error) {
    console.error('개인화 설정 업데이트 중 오류 발생:', error);
    alert('개인화 설정 업데이트에 실패했습니다: ' + error.message);
  }
}

// TODO 4: 개인화 설정 삭제 함수 (HTML에서 호출되는 함수명으로 변경)
/**
 * 선택된 개인화 설정을 삭제하는 함수
 * @description
 * 사용자가 "개인화 삭제" 버튼을 클릭했을 때 실행됩니다:
 * 1. "기본 레이아웃"은 삭제할 수 없음 (보호됨)
 * 2. 사용자 확인 후 선택된 개인화 설정을 삭제
 * 3. selectbox에서 해당 옵션을 제거
 * 4. 기본 설정으로 변경하고 그리드를 기본 레이아웃으로 리셋
 * 5. localStorage에서도 해당 설정을 제거
 */
function removePersonalizedList() {
  const select = document.getElementById('personalizedList');
  const selectedValue = select.value;

  // 기본 레이아웃이 선택된 경우 삭제할 수 없음
  if (!selectedValue || selectedValue === 'default') {
    alert('삭제할 개인화 설정을 선택해주세요.');
    return;
  }

  if (confirm('선택한 개인화 설정을 삭제하시겠습니까?')) {
    if (personalizedList[selectedValue]) {
      delete personalizedList[selectedValue];
      savePersonalizedSettings();

      // selectbox에서도 해당 옵션 제거
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === selectedValue) {
          select.removeChild(select.options[i]);
          break;
        }
      }

      // 기본 설정으로 변경
      select.value = 'default';
      resetToDefaultLayout();

      console.log('개인화 설정 삭제 완료:', selectedValue);
      alert('개인화 설정이 삭제되었습니다.');
    }
  }
}

// TODO 7: 개인화 변경시 (오류 처리 및 로깅 추가)
// 'selectChange' 함수를 'applyPersonalizedSettings'로 변경하여 재사용 가능하게 수정
// 기존 selectChange() 함수를 아래와 같이 변경합니다.
/**
 * 선택된 개인화 설정을 그리드에 적용하는 함수
 * @param {string} settingKey - 적용할 개인화 설정의 키 값
 * @description
 * 개인화 설정을 선택했을 때 그리드에 해당 설정을 적용합니다:
 * 1. 컬럼 레이아웃을 저장된 상태로 복원
 * 2. 행/컬럼 고정 상태를 복원
 * 3. 행 그룹핑을 복원
 * 4. 행 높이를 복원
 * 5. 컬럼 필터 상태를 복원
 * 6. 활성화된 필터 항목들을 복원
 * 7. 정렬 상태를 복원
 */
function applyPersonalizedSettings(settingKey) {
  const layout = personalizedList[settingKey];
  if (!layout) {
    console.error('설정을 찾을 수 없습니다:', settingKey);
    return;
  }

  // 레이아웃
  gridView.setColumnLayout(layout.layout);

  // 고정
  gridView.fixedOptions.colCount = layout.colFixed;
  gridView.fixedOptions.rowCount = layout.rowFixed;

  // 행 그룹핑
  gridView.groupBy(layout.rowGroup);
  // 행 높이
  gridView.displayOptions.rowHeight = layout.rowHeight;

  // 필터
  for (let i = 0; i < gridView.getColumns().length; i++) {
    gridView.columnByName(gridView.getColumns()[i].name).autoFilter = false;
  }
  if (layout.filterColumns) {
    for (let i = 0; i < layout.filterColumns.length; i++) {
      gridView.columnByName(layout.filterColumns[i]).autoFilter = true;
    }
  }

  // 기존 활성화되어 있던 필터 다시 활성화
  // null 또는 undefined 체크를 추가하여 오류를 방지
  if (layout.activeColumnFilters && Array.isArray(layout.activeColumnFilters)) {
    layout.activeColumnFilters.forEach((filter) => {
      // filter가 null 또는 undefined가 아닌지 확인
      if (filter) {
        const column = Object.keys(filter)[0];
        const items = filter[column];

        // items가 유효한 배열인지 확인
        if (items && items.length > 0) {
          const filterNames = items.map((f) => f.name);
          gridView.autoFiltersRefresh();
          gridView.activateColumnFilters(column, filterNames, true);
        }
      }
    });
  }

  // 기존 활성화되어 있던 필터 다시 활성화
  // layout.activeColumnFilters.forEach((filter, idx) => {
  //     const column = Object.keys(filter)[0];
  //     const items = filter[column];
  //     if (items?.length > 0) {
  //         const filterNames = items.map((f) => f.name);
  //         gridView.autoFiltersRefresh();
  //         gridView.activateColumnFilters(column, filterNames, true);
  //     }
  // });

  //정렬
  var sortFields = [];
  var sortDirs = [];
  if (layout.sort) {
    for (var j = 0; j < layout.sort.length; j++) {
      sortFields.push(layout.sort[j].orgFieldName);
      sortDirs.push(layout.sort[j].direction);
    }
    gridView.orderBy(sortFields, sortDirs);
  } else {
    gridView.orderBy([], []);
  }
}

// 기존 selectChange 함수를 이제 새로운 함수를 호출하도록 변경합니다.
/**
 * selectbox에서 개인화 설정이 변경되었을 때 호출되는 이벤트 핸들러 함수
 * @description
 * 사용자가 selectbox에서 다른 개인화 설정을 선택했을 때 실행됩니다.
 * 선택된 설정의 키 값을 가져와서 applyPersonalizedSettings 함수를 호출하여
 * 해당 설정을 그리드에 적용합니다.
 */
function selectChange() {
  applyPersonalizedSettings(document.getElementById('personalizedList').value);
}

// 현재 개인화 설정 내보내기 (JSON 형태로)
/**
 * 개인화 설정을 JSON 파일로 내보내는 함수
 * @description
 * 사용자가 개인화 설정을 백업하거나 다른 환경으로 이동할 때 사용합니다:
 * 1. 현재 personalizedList와 userCount를 포함한 데이터 객체 생성
 * 2. 내보내기 날짜를 추가하여 버전 관리
 * 3. JSON 형태로 변환하여 Blob 객체 생성
 * 4. 다운로드 링크를 생성하여 파일 다운로드 실행
 * 5. 메모리 정리를 위해 URL 객체 해제
 */
function exportPersonalizedSettings() {
  try {
    const exportData = {
      settings: personalizedList,
      userCounter: userCount,
      exportDate: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download =
      'realgrid_personalized_settings_' + new Date().toISOString().slice(0, 10) + '.json';
    link.click();

    URL.revokeObjectURL(url);
    console.log('개인화 설정 내보내기 완료');
  } catch (error) {
    console.error('개인화 설정 내보내기 중 오류:', error);
    alert('개인화 설정 내보내기에 실패했습니다: ' + error.message);
  }
}

// 개인화 설정 가져오기 (JSON 파일로부터)
/**
 * JSON 파일로부터 개인화 설정을 가져오는 함수
 * @param {Event} event - 파일 선택 이벤트 객체
 * @description
 * 사용자가 이전에 내보낸 개인화 설정 파일을 가져올 때 사용합니다:
 * 1. 선택된 JSON 파일을 FileReader로 읽기
 * 2. 파일 내용을 파싱하여 유효성 검사
 * 3. 기존 설정과 병합할지 사용자에게 확인
 * 4. 새로운 설정들을 personalizedList에 추가
 * 5. selectbox에 옵션들을 추가
 * 6. userCount를 업데이트하고 localStorage에 저장
 */
function importPersonalizedSettings(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const importData = JSON.parse(e.target.result);

      if (!importData.settings || typeof importData.settings !== 'object') {
        throw new Error('올바르지 않은 파일 형식입니다.');
      }

      // 기존 설정과 병합할지 물어보기
      const shouldMerge = confirm(
        '기존 개인화 설정과 병합하시겠습니까?\n(취소를 선택하면 기존 설정을 덮어씁니다)'
      );

      if (!shouldMerge) {
        personalizedList = {};
        userCount = 1;

        // selectbox 초기화
        const select = document.getElementById('personalizedList');
        select.innerHTML = '<option value="default">기본 레이아웃</option>';
      }

      // 새 설정들을 추가
      Object.keys(importData.settings).forEach((key) => {
        personalizedList[key] = importData.settings[key];

        // selectbox에 추가
        const select = document.getElementById('personalizedList');
        const option = document.createElement('option');
        option.value = key;
        option.text = getPersonalizationDisplayName(key);
        select.appendChild(option);
      });

      // userCounter 업데이트
      if (importData.userCounter && importData.userCounter > userCount) {
        userCount = importData.userCounter;
      }

      // localStorage에 저장
      savePersonalizedSettings();

      alert('개인화 설정을 성공적으로 가져왔습니다.');
      console.log('개인화 설정 가져오기 완료');
    } catch (error) {
      console.error('개인화 설정 가져오기 중 오류:', error);
      alert('개인화 설정 가져오기에 실패했습니다: ' + error.message);
    }
  };

  reader.readAsText(file);
}

/**
 * 그리드에 미리 정의된 컬럼 레이아웃을 적용하는 함수
 * @description
 * 사용자가 "컬럼 그룹" 버튼을 클릭했을 때 실행됩니다:
 * 1. 법인부서 그룹: corporation, department 컬럼을 그룹화
 * 2. 계약일자 그룹: contract_start_date, contract_end_date 컬럼을 그룹화
 * 3. 각 그룹에 적절한 헤더 텍스트를 설정
 * 4. 그리드에 레이아웃을 적용하여 컬럼들을 그룹별로 표시
 */
function setColumnLayout() {
  var layout = [
    {
      name: 'Group1',
      direction: 'horizontal',
      items: ['corporation', 'department'],
      header: { text: '법인부서' },
    },
    {
      name: 'Group2',
      direction: 'horizontal',
      items: ['contract_start_date', 'contract_end_date'],
      header: { text: '계약일자' },
    },
  ];

  gridView.setColumnLayout(layout);
}

/**
 * 그리드에서 변경된 데이터를 수집하고 콘솔에 출력하는 함수
 * @description
 * 사용자가 "저장" 버튼을 클릭했을 때 실행됩니다:
 * 1. 삭제된 행들의 정보를 수집하여 콘솔에 출력
 * 2. 변경된 행들의 정보를 수집하여 콘솔에 출력
 * 3. 새로 추가된 행들의 정보를 수집하여 콘솔에 출력
 * 4. 각 변경사항을 JSON 형태로 콘솔에 로그로 기록
 *
 * 현재는 콘솔 출력만 하고 있으며, 실제 서버 저장 로직은 구현되지 않았습니다.
 */
function saveToServer() {
  const delInfo = [];
  const addedInfo = [];
  const changedInfo = [];
  // 삭제된 행을 저장
  const deletedRows = dataProvider.getStateRows('deleted');
  if (deletedRows.length > 0) {
    deletedRows.forEach((element) => {
      delInfo.push(dataProvider.getJsonRow(element));
    });
    console.log('삭제된 행 정보:', JSON.stringify(delInfo));
  }

  // 변경된 행을 저장
  const changedRows = dataProvider.getStateRows('updated');
  if (changedRows.length > 0) {
    changedRows.forEach((element) => {
      changedInfo.push(dataProvider.getJsonRow(element));
    });
    console.log('변경된 행 정보:', JSON.stringify(changedInfo));
  }

  // 추가된 행을 저장
  const addedRows = dataProvider.getStateRows('created');
  if (addedRows.length > 0) {
    addedRows.forEach((element) => {
      addedInfo.push(dataProvider.getJsonRow(element));
    });
    console.log('추가된 행 정보:', JSON.stringify(addedInfo));
  }
}

// 전역 변수로 편집 모드 상태 관리
var isEditMode = true; // 초기값: 보기모드

/**
 * 편집 모드와 보기 모드를 토글하는 함수
 * @description
 * 사용자가 편집모드/보기모드 버튼을 클릭했을 때 실행됩니다:
 * 1. 보기 모드일 때: 편집 모드로 전환 (editable: true인 컬럼만 편집 가능)
 * 2. 편집 모드일 때: 보기 모드로 전환 (모든 편집 불가능)
 * 3. 버튼 텍스트와 스타일을 현재 모드에 맞게 변경
 * 4. 그리드의 편집 옵션을 동적으로 변경
 */
function toggleEditMode() {
  const editModeBtn = document.getElementById('editModeToggleBtn');

  if (isEditMode) {
    // 편집 모드 → 보기 모드 전환
    setViewMode();
    editModeBtn.innerHTML = '<span class="btn-icon">👁️</span>보기모드';
    editModeBtn.className = 'btn btn-warning btn-compact';
    isEditMode = false;
  } else {
    // 보기 모드 → 편집 모드 전환
    setEditMode();
    editModeBtn.innerHTML = '<span class="btn-icon">✏️</span>편집모드';
    editModeBtn.className = 'btn btn-success btn-compact';
    isEditMode = true;
  }
}

/**
 * 편집 모드를 활성화하는 함수
 * @description
 * 그리드를 편집 가능한 상태로 설정합니다:
 * 1. 전체 그리드 편집 모드 활성화
 * 2. columns[]에서 editable: true인 컬럼만 편집 가능하게 설정
 * 3. editable: false인 컬럼은 편집 불가능하게 유지
 */
function setEditMode() {
  // 전체 그리드 편집 모드 활성화
  gridView.editOptions.editable = true;
  gridView.editOptions.updatable = true;

  // columns[]에서 editable: true인 컬럼만 편집 가능하게 설정
  columns.forEach((column) => {
    if (column.editable === true) {
      const gridColumn = gridView.columnByName(column.name);
      if (gridColumn) {
        gridColumn.editable = true;
      }
    }
  });

  console.log('편집 모드가 활성화되었습니다. (editable: true인 컬럼만 편집 가능)');
}

/**
 * 보기 모드를 활성화하는 함수
 * @description
 * 그리드를 편집 불가능한 상태로 설정합니다:
 * 1. 전체 그리드 편집 모드 비활성화
 * 2. 모든 컬럼을 편집 불가능하게 설정
 * 3. 데이터 보호 및 무결성 확보
 */
function setViewMode() {
  // 전체 그리드 편집 모드 비활성화
  gridView.editOptions.editable = false;
  gridView.editOptions.updatable = false;

  // 모든 컬럼을 편집 불가능하게 설정
  const gridColumns = gridView.getColumns();
  gridColumns.forEach((column) => {
    column.editable = false;
  });

  console.log('보기 모드가 활성화되었습니다. (모든 편집 불가능)');
}

/**
 * 현재 편집 모드 상태를 반환하는 함수
 * @returns {boolean} 현재 편집 모드 상태 (true: 편집모드, false: 보기모드)
 */
function getCurrentEditMode() {
  return isEditMode;
}

/**
 * 특정 컬럼의 편집 가능 여부를 확인하는 함수
 * @param {string} columnName - 확인할 컬럼명
 * @returns {boolean} 해당 컬럼의 편집 가능 여부
 */
function isColumnEditable(columnName) {
  const column = columns.find((col) => col.name === columnName);
  return column ? column.editable === true : false;
}
