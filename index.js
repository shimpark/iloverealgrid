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
    },
    {
        name: 'project_name',
        fieldName: 'project_name',
        header: {
            text: '프로젝트명',
        },
        width: 100,
        autoFilter: true,
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
    },
    {
        name: 'competition_notes',
        fieldName: 'competition_notes',
        header: {
            text: '경업이슈참고사항',
        },
        width: 100,
        autoFilter: true,
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
    },
    {
        name: 'competitive',
        fieldName: 'competitive',
        header: {
            text: '경쟁 여부',
        },
        width: 100,
        autoFilter: true,
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
    },
    {
        name: 'project_editable',
        fieldName: 'project_editable',
        visible: false,
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
        items: ['contract_start_date', 'contract_end_date', 'project_type', 'customer_type', 'client_manager', 'collaboration_team', 'competition_notes'],
        header: {
            text: '상세',
        },
    },
    {
        name: 'proposal',
        direction: 'horizontal',
        items: ['manager', 'proposal_budget', 'competitive', 'proposal_deadline', 'pt_schedule', 'sme_bid', 'proposal_result'],
        header: {
            text: '제안',
        },
    },
];

var httpRequest;

function setProvider(filename) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = loadData;
    httpRequest.open('GET', '/data/' + filename);
    httpRequest.send();
}

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
        console.log('1. onContextMenuPopup', elementName.cellType);
        // 해더 셀에서만 컨텍스트 메뉴를 표시
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
}

function start() {
    createGrid('realgrid');

    // TODO 4: 페이지 로딩 시 저장된 개인화 설정들을 selectbox에 로드
    loadPersonalizedSettings();
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
        {
            label: '행추가 취소',
            tag: 'cancelInsertRow',
        },
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

function onContextMenuClick(grid, data, index) {
    console.log('4. onContextMenuClick', data, index);

    var cell = grid.getCurrent();
    var col = grid.columnByName(cell.column);

    // data.parent 에 Tag 속성이 없어 switch문 전에 확인한다.
    // parent에 Tag가 추가되면 switch 문에서 처리하자.
    if (data.parent.label == '컬럼' && data.tag !== 'columnShow' && data.tag !== 'autoFilter' && data.tag !== 'autoFilterFalse') {
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
            grid.setFixedOptions({ colCount: col.index + 1 });
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
        case 'cancelInsertRow':
            var curr = grid.getCurrent();
            console.log('cancelInsertRow', curr);
            if (curr.itemIndex > -1) {
                dataProvider.softDeleting = false;
                dataProvider.removeRow(curr.dataRow);
                dataProvider.softDeleting = true;
            }
            break;
        case 'deleteRow':
            if (grid.getCurrent().itemIndex > -1) {
                let curr = grid.getCurrent();

                var project_editable = gridView.getValues(curr.dataRow).project_editable;
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

function gridEvent() {
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
        if (invalidRows.indexOf(dataCell.index.dataRow) > -1 && dataCell.index.column.fieldName === 'sales') {
            return { style: { background: 'rgba(255,0,0,0.5)' } };
        } else if (dataCell.isValueChanged() && dataCell.index.fieldName != 'favorite') {
            //dataCell.isValueChanged() 수정된 셀 스타일 적용
            return { style: { background: 'rgba(255,255,0,0.5)' } };
        }
    });

    // ⭐ 편집모드시 검열
    gridView.onShowEditor = function (grid, index, props, attrs) {
        console.log('onShowEditor 호출됨:', index);

        let curr = grid.getCurrent();

        var project_editable = gridView.getValues(curr.dataRow).project_editable;

        // JSON 데이터의 project_editable 값 확인
        if (typeof project_editable === 'boolean') {
            if (project_editable) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    };
}

var userCount = 1;
var personalizedList = {};

// TODO 4: 페이지 로딩 시 저장된 개인화 설정들을 selectbox에 로드
function loadPersonalizedSettings() {
    try {
        const savedSettings = localStorage.getItem('realgrid_personalized_settings');
        const savedCounter = localStorage.getItem('realgrid_user_counter');

        if (savedSettings) {
            personalizedList = JSON.parse(savedSettings);
        } else {
            personalizedList = {};
        }

        if (savedCounter) {
            userCount = parseInt(savedCounter, 10);
        } else {
            const keys = Object.keys(personalizedList).filter((key) => key.startsWith('personalize'));
            if (keys.length > 0) {
                const maxNum = Math.max(...keys.map((key) => parseInt(key.replace('personalize', ''))));
                userCount = maxNum + 1;
            } else {
                userCount = 1;
            }
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
                applyPersonalizedSettings(firstKey);
                select.value = firstKey;
                console.log('첫 번째 개인화 설정이 자동으로 적용되었습니다:', firstKey);
            }
        }
    } catch (error) {
        console.error('개인화 설정 로드 중 오류 발생:', error);
        personalizedList = {};
        userCount = 1;
        localStorage.removeItem('realgrid_personalized_settings');
        localStorage.removeItem('realgrid_user_counter');
    }
}

// TODO 5: 개인화 설정 저장 함수 (userCount도 함께 저장)
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
}

// 현재 그리드의 상태를 객체로 반환하는 공통 함수
function getGridState() {
    //컬럼 필터 정보
    var filterColumns = [];
    for (var i = 0; i < gridView.getColumns().length; i++) {
        if (gridView.columnByName(gridView.getColumns()[i].name).autoFilter) {
            filterColumns.push(gridView.getColumns()[i].name);
        }
    }
    //각 컬럼 필터 목록
    var activeColumnFilters = [];
    for (var j = 0; j < filterColumns.length; j++) {
        var filterList = gridView.getActiveColumnFilters(filterColumns[j]);
        activeColumnFilters.push(filterList);
    }

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
            // 기존 개인화 설정이 있다면, 새로운 개인화 설정을 추가 (개인화1, 개인화2...)
            const newKey = 'personalize' + userCount;
            const newName = '개인화' + userCount;
            const option = document.createElement('option');
            option.value = newKey;
            option.text = newName;
            select.appendChild(option);

            const personalizationData = {
                ...gridState,
                createdAt: new Date().toISOString(),
                name: newName,
            };

            personalizedList[newKey] = personalizationData;
            userCount++;

            console.log('새 개인화 설정 추가됨:', newKey, personalizationData);
            alert('개인화 설정이 저장되었습니다: ' + newName);
        }

        savePersonalizedSettings();
        select.value = Object.keys(personalizedList).length > 0 ? Object.keys(personalizedList)[Object.keys(personalizedList).length - 1] : 'default';
    } catch (error) {
        console.error('개인화 설정 저장 중 오류 발생:', error);
        alert('개인화 설정 저장에 실패했습니다: ' + error.message);
    }
}

function updatePersonalizedList() {
    try {
        const select = document.getElementById('personalizedList');
        const selectedValue = select.value;

        // 수정할 개인화 설정이 없는 경우
        if (!selectedValue || (selectedValue === 'default' && Object.keys(personalizedList).length === 0)) {
            alert('수정할 개인화 설정을 선택하거나, 저장된 개인화 설정이 없어 현재 그리드 상태를 "기본 레이아웃"으로 저장합니다.');
            const gridState = getGridState();
            const defaultPersonalizationData = {
                ...gridState,
                createdAt: new Date().toISOString(),
                name: '기본 레이아웃', // 최초 저장 시 "기본 레이아웃"으로 이름 설정
            };

            personalizedList['default'] = defaultPersonalizationData;
            savePersonalizedSettings();
            select.value = 'default';
            alert('현재 그리드 상태가 "기본 레이아웃"으로 저장되었습니다.');
            return;
        }

        // '기본 레이아웃'이 선택되었지만, 이미 저장된 personalizedList가 있는 경우
        if (selectedValue === 'default' && personalizedList['default']) {
            console.log('기본 레이아웃을 업데이트합니다...');
            const originalData = personalizedList[selectedValue];
            const gridState = getGridState();
            const updatedPersonalizationData = {
                ...originalData,
                ...gridState,
                updatedAt: new Date().toISOString(),
            };
            personalizedList[selectedValue] = updatedPersonalizationData;
            savePersonalizedSettings();
            alert('"' + originalData.name + '" 설정이 현재 상태로 업데이트되었습니다.');
            return;
        }

        // 기존 개인화 설정 업데이트
        if (personalizedList[selectedValue]) {
            console.log('"' + selectedValue + '" 설정을 업데이트합니다...');
            const originalData = personalizedList[selectedValue];
            const gridState = getGridState();
            const updatedPersonalizationData = {
                ...originalData,
                ...gridState,
                updatedAt: new Date().toISOString(),
            };
            personalizedList[selectedValue] = updatedPersonalizationData;
            savePersonalizedSettings();
            alert('"' + originalData.name + '" 설정이 현재 상태로 업데이트되었습니다.');
        } else {
            alert('수정할 개인화 설정을 찾을 수 없습니다.');
        }
    } catch (error) {
        console.error('개인화 설정 업데이트 중 오류 발생:', error);
        alert('개인화 설정 업데이트에 실패했습니다: ' + error.message);
    }
}

// TODO 4: 개인화 설정 삭제 함수 (HTML에서 호출되는 함수명으로 변경)
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
    for (var i = 0; i < gridView.getColumns().length; i++) {
        gridView.columnByName(gridView.getColumns()[i].name).autoFilter = false;
    }
    if (layout.filterColumns) {
        for (var i = 0; i < layout.filterColumns.length; i++) {
            gridView.columnByName(layout.filterColumns[i]).autoFilter = true;
        }
    }

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
function selectChange() {
    applyPersonalizedSettings(document.getElementById('personalizedList').value);
}

// 현재 개인화 설정 내보내기 (JSON 형태로)
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
        link.download = 'realgrid_personalized_settings_' + new Date().toISOString().slice(0, 10) + '.json';
        link.click();

        URL.revokeObjectURL(url);
        console.log('개인화 설정 내보내기 완료');
    } catch (error) {
        console.error('개인화 설정 내보내기 중 오류:', error);
        alert('개인화 설정 내보내기에 실패했습니다: ' + error.message);
    }
}

// 개인화 설정 가져오기 (JSON 파일로부터)
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
            const shouldMerge = confirm('기존 개인화 설정과 병합하시겠습니까?\n(취소를 선택하면 기존 설정을 덮어씁니다)');

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

function saveChanges() {
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
