/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:14:39
 * @version $Id$
 */
const map = new BMap.Map('myMap');                 
const point = new BMap.Point(120.128669, 30.273947);
map.centerAndZoom(point, 13);                        

let opts = {offset: new BMap.Size(0, 0)};      
map.addControl(new BMap.MapTypeControl(opts)); 
map.addControl(new BMap.NavigationControl());  
map.addControl(new BMap.ScaleControl());      
map.addControl(new BMap.OverviewMapControl()); 

map.setCurrentCity('杭州');                    
map.enableScrollWheelZoom(true);              

const local = new BMap.LocalSearch('杭州市', {
    renderOptions: {
        map: map,
        autoViewport: true,
        panel: 'result'
    },
    pageCapacity: 7
});
local.searchNearby('宾馆', '西湖');

$('#search').click((e) => {
    const end = $('#end');
    const text = end.val();
    console.log(text);
    if (!text) {
        alert('终点不能为空！');
        return;
    }

    const routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME, BMAP_TRANSIT_POLICY_LEAST_TRANSFER, BMAP_TRANSIT_POLICY_LEAST_WALKING, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
    const transit = new BMap.TransitRoute(map, {
        renderOptions: {map: map, panel: "result"},
    });
    map.clearOverlays();
    let i = $("#way").val();
    transit.setPolicy(routePolicy[i]);
    transit.search("杭州师范大学仓前新校区", text);
});


$('#myMap').click((e) => {
    $('#end').val(e.target.title);
});

$('#lake').click((e) => {
    map.clearOverlays();
    $('#result').empty().css("border","");
    local.searchNearby('宾馆', '西湖');
});
$('#hznu').click((e) => {
    map.clearOverlays();
    const point = new BMap.Point(120.01525, 30.29515);
    map.centerAndZoom(point, 17);

    $('#result').empty().css("border","1px solid #666").append('<ul id="list" style="padding-left:0;"></ul>');

    const src1 = 'img/nanmen.jpg';
    const src2 = 'img/tu.jpg';
    const src3 = 'img/bo4.jpg';
    const src4 = 'img/bo6.jpg';
    const src5 = 'img/s2.jpg';
    const src6 = 'img/s7.jpg';
    const src7 = 'img/s13.jpg';
    const src8 = 'img/s29.jpg';
    const src9 = 'img/lan.jpg';
    const src10 = 'img/cao.jpg';
    const src11 = 'img/zu.jpg';
    const src12 = 'img/yi.jpg';
    const src13 = 'img/chaoshi.jpg';
    const src14 = 'img/shitang.jpg';
    const src15 = 'img/shi.jpg';

    const points = [
        {'lng': 120.019977, 'lat': 30.294164, 'url': src1, 'id': 'A', 'name': '南门'},
        {'lng': 120.022199, 'lat': 30.298714, 'url': src2, 'id': 'B', 'name': '图书馆'},
        {'lng': 120.015757, 'lat': 30.295138, 'url': src3, 'id': 'C', 'name': '博文苑4号楼'},
        {'lng': 120.016788, 'lat': 30.296249, 'url': src4, 'id': 'D', 'name': '博文苑6号楼'},
        {'lng': 120.020426, 'lat': 30.295713, 'url': src5, 'id': 'E', 'name': '恕园2号楼'},
        {'lng': 120.019007, 'lat': 30.295259, 'url': src6, 'id': 'F', 'name': '恕园7号楼'},
        {'lng': 120.019142, 'lat': 30.296413, 'url': src7, 'id': 'G', 'name': '恕园13号楼'},
        {'lng': 120.019305, 'lat': 30.297928, 'url': src8, 'id': 'H', 'name': '恕园29号楼'},
        {'lng': 120.015027, 'lat': 30.296077, 'url': src9, 'id': 'I', 'name': '卫生所'},
        {'lng': 120.01545, 'lat': 30.295711, 'url': src10, 'id': 'J', 'name': '足球场'},
        {'lng': 120.0143, 'lat': 30.29513, 'url': src11, 'id': 'K', 'name': '操场'},
        {'lng': 120.012306, 'lat': 30.296276, 'url': src12, 'id': 'L', 'name': '篮球场'},
        {'lng': 120.016995, 'lat': 30.29536, 'url': src13, 'id': 'M', 'name': '超市'},
        {'lng': 120.018189, 'lat': 30.29543, 'url': src14, 'id': 'N', 'name': '食堂'},
        {'lng': 120.023217, 'lat': 30.298906, 'url': src15, 'id': 'O', 'name': '师生活动中心'},
    ];
    function addMarker(points) {
        for (let i = 0, pointsLen = points.length; i < pointsLen; i++) {
            const myIcon = new BMap.Icon("http://map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
                offset: new BMap.Size(10, 25),
                imageOffset: new BMap.Size(0, 0 - i * 25)
            });
            let point = new BMap.Point(points[i].lng, points[i].lat); 
            let marker = new BMap.Marker(point, {icon: myIcon}); 
            map.addOverlay(marker);  
            (function () {
                let thePoint = points[i];
                marker.addEventListener("click", (e) => showInfo(marker, thePoint));
            })();

            let changey = 0 - i * 25;

            $('#list').append(`
            <li style="margin: 2px 0px; padding: 0px 5px 5px 0px; cursor: pointer; overflow: hidden; line-height: 17px;">
                <span style="background:url(http://api.map.baidu.com/images/markers.png) -23px ${changey}px no-repeat;
                    width:19px;height:25px;
                    cursor:pointer;
                    float:left;
                    *zoom:1;overflow:hidden;
                    margin:2px 3px 0 5px;*margin-right:0px;
                    display:inline;">&nbsp;
                </span>
                <div style="zoom: 1; overflow: hidden; padding: 0px 5px; background-color: rgb(240, 240, 240);">
                    <div style="line-height:30px;font-size:12px;">
                        <span style="color:#00c;">${points[i].name}</span>
                    </div>
                </div>
            </li>`);
        }
    }

    function showInfo(thisMarker, point) {
        const sContent = `
            <div style="width: 300px;height: 200px;">
                <img src = ${point.url} width="300" height="200" title=${point.name}/>
                <h4 style="margin:0 0 5px 0;padding:0.2em 0">杭师大仓前校区</h4>
                <p style="margin:0;line-height:1.5;font-size:13px;text-indent:2em">${point.name}</p>
            </div>`;

        const infoWindow = new BMap.InfoWindow(sContent); 
        thisMarker.openInfoWindow(infoWindow); 
    }

    addMarker(points);
});