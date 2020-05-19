"use strict";

let tabs = ["input-nav", "score-nav", "mode-nav", "service-nav",
            "congestion-nav", "benefit-nav", "toll-nav", "sustainability-nav"];
let panels = ["input-panel", "score-panel", "mode-panel", "service-panel",
              "congestion-panel", "benefit-panel", "toll-panel", 
              "sustainability-panel"];
let contents = ["input", "score", "mode", "service", "congestion", "benefit",
               "toll", "sustainability"];

let submissions = ['RS_MILEAGE_Social_TR_21(5dd90bd9aa66dcb00e7c499a)',
 'RS_MILEAGE_Congestion_TR_41(5dd8c115aa66dcb00e7c497e)',
 'RS_MILEAGE_Congestion_TR_14(5dd6533959ca2a5c5a39b229)',
 'RS_CORDON_Social_TR_8(5e5c5b5a50b83111c4efd579)',
 'RS_MILEAGE_Congestion_TR_40(5dd5f13859ca2a5c5a39b1f9)',
 'RS_CORDON_Social_Congestion_3(5e5f63d739dc4507d3873265)',
 'RS_MILEAGE_Congestion_TR_30(5dd33691354c574b93c68c5e)',
 'RS_CORDON_Social_TR_11(5e5d4aaf50b83111c4efd5de)',
 'RS_CORDON_Social_Congestion_9(5e5d4aaf50b83111c4efd5de)',
 'RS_MILEAGE_Social_TR_24(5dd3844e354c574b93c68c80)',
 'RS_MILEAGE_Social_TR_29(5dd7a12f59ca2a5c5a39b2af)',
 'RS_MILEAGE_Congestion_TR_15(5dd8c097aa66dcb00e7c497d)',
 'RS_MILEAGE_Congestion_TR_17(5dd38318354c574b93c68c7f)',
 'RS_MILEAGE_Congestion_TR_36(5dd62b4559ca2a5c5a39b213)',
 'RS_CORDON_Social_Congestion_7(5e5ddd6d39dc4507d38731cd)',
 'RS_MILEAGE_Social_TR_9(5dd30ea0da42c66d2f80d842)',
 'RS_MILEAGE_Congestion_TR_4(5dd9cc04aa66dcb00e7c49e9)',
 'RS_MILEAGE_Congestion_TR_45(5dd3aa3b354c574b93c68c8f)',
 'RS_MILEAGE_Social_TR_4(5dd7266559ca2a5c5a39b27c)',
 'RS_MILEAGE_Congestion_TR_33(5dd70ee659ca2a5c5a39b273)',
 'RS_CORDON_Social_TR_4(5e5d35f050b83111c4efd5d3)',
 'RS_MILEAGE_Congestion_TR_31(5dd4cb5c07017f4cef36e8f4)',
 'RS_MILEAGE_Congestion_TR_6(5dd7227259ca2a5c5a39b27b)',
 'RS_MILEAGE_Congestion_TR_10(5dd947e1aa66dcb00e7c49b5)',
 'RS_MILEAGE_Congestion_TR_11(5dd7b9bf59ca2a5c5a39b2ba)',
 'RS_MILEAGE_Congestion_TR_44(5dd6892259ca2a5c5a39b23c)',
 'RS_MILEAGE_Congestion_TR_8(5dd4f21a07017f4cef36e908)',
 'RS_MILEAGE_Social_TR_16(5dd422b68d0e0e0d0e6b73cf)',
 'RS_MILEAGE_Social_TR_26(5dd6647559ca2a5c5a39b22d)',
 'RS_CORDON_Social_Congestion_1(5e5e6b1639dc4507d3873204)',
 'RS_MILEAGE_Social_Congestion_2(5dd6a23d59ca2a5c5a39b249)',
 'RS_MILEAGE_Congestion_TR_35(5dd449f68d0e0e0d0e6b73e1)',
 'RS_MILEAGE_Social_TR_27(5dd7a39f59ca2a5c5a39b2b1)',
 'RS_MILEAGE_Congestion_TR_42(5dd7890459ca2a5c5a39b2a4)',
 'RS_MILEAGE_Social_TR_25(5dd53fd507017f4cef36e929)',
 'RS_MILEAGE_Social_TR_10(5dd4de9507017f4cef36e8fe)',
 'RS_MILEAGE_Congestion_TR_26(5dd9e62aaa66dcb00e7c49f5)',
 'RS_MILEAGE_Congestion_TR_1(5dd967acaa66dcb00e7c49c1)',
 'RS_MILEAGE_Social_TR_1(5_BAU)',
 'RS_CORDON_Congestion_TR_1(5e5cfb6950b83111c4efd5bc)',
 'RS_MILEAGE_Congestion_TR_18(5dd572c807017f4cef36e93c)',
 'RS_CORDON_Social_TR_14(5e5cabc050b83111c4efd59b)',
 'RS_MILEAGE_Social_Congestion_3(5dd967acaa66dcb00e7c49c1)',
 'RS_MILEAGE_Congestion_TR_5(5dd739af59ca2a5c5a39b284)',
 'RS_CORDON_Social_TR_2(5e5bd8fe50b83111c4efd547)',
 'RS_CORDON_Social_Congestion_12(5e5efa7139dc4507d387323e)',
 'RS_CORDON_Congestion_TR_3(5e5cabc050b83111c4efd59b)',
 'RS_CORDON_Social_TR_10(5e5e59c039dc4507d38731fe)',
 'RS_CORDON_Social_Congestion_10(5e5d22ef50b83111c4efd5cc)',
 'RS_CORDON_Social_Congestion_5(5e5b028450b83111c4efd4eb)',
 'RS_MILEAGE_Congestion_TR_12(5dd47f758d0e0e0d0e6b73f7)',
 'RS_CORDON_Social_Congestion_2(5e5e8cb139dc4507d387320f)',
 'RS_CORDON_Social_TR_7(5e5da3b339dc4507d38731b2)',
 'RS_MILEAGE_Social_TR_12(5dd9e8edaa66dcb00e7c49f7)',
 'RS_MILEAGE_Congestion_TR_39(5dd4cb5e07017f4cef36e8f5)',
 'RS_CORDON_Social_TR_13(5e5f4f7239dc4507d387325d)',
 'RS_MILEAGE_Congestion_TR_48(5dd72d9259ca2a5c5a39b281)',
 'RS_CORDON_Social_TR_1(5e5e6b1639dc4507d3873204)',
 'RS_MILEAGE_Congestion_TR_27(5dd73c3959ca2a5c5a39b285)',
 'RS_MILEAGE_Congestion_TR_34(5dd790c959ca2a5c5a39b2a9)',
 'RS_MILEAGE_Social_Congestion_1(5_BAU)',
 'RS_MILEAGE_Congestion_TR_20(5dd3b768354c574b93c68c93)',
 'RS_CORDON_Social_TR_3(5e5d5e4050b83111c4efd5e7)',
 'RS_CORDON_Social_TR_5(5e5c978250b83111c4efd592)',
 'RS_MILEAGE_Social_TR_7(5dd31062354c574b93c68c52)',
 'RS_MILEAGE_Social_TR_30(5dd7672259ca2a5c5a39b298)',
 'RS_MILEAGE_Social_TR_14(5dd96e83aa66dcb00e7c49c5)',
 'RS_CORDON_Social_Congestion_8(5e5adbd450b83111c4efd4dc)',
 'RS_MILEAGE_Social_TR_15(5dd6c9c359ca2a5c5a39b258)',
 'RS_MILEAGE_Congestion_TR_47(5dd9f290aa66dcb00e7c49f9)',
 'RS_MILEAGE_Social_TR_5(5dd739af59ca2a5c5a39b284)',
 'RS_CORDON_Social_Congestion_4(5e5b2a6b50b83111c4efd4fe)',
 'RS_MILEAGE_Congestion_TR_43(5dd565c807017f4cef36e938)',
 'RS_MILEAGE_Congestion_TR_49(5dd9e6f2aa66dcb00e7c49f6)',
 'RS_MILEAGE_Social_TR_23(5dd485008d0e0e0d0e6b73fb)',
 'RS_CORDON_Social_TR_6(5e5b2a6b50b83111c4efd4fe)',
 'RS_MILEAGE_Congestion_TR_19(5dd68e1059ca2a5c5a39b240)',
 'RS_MILEAGE_Congestion_TR_46(5dd6ff0459ca2a5c5a39b26c)',
 'RS_MILEAGE_Social_TR_2(5dd6a23d59ca2a5c5a39b249)',
 'RS_MILEAGE_Congestion_TR_37(5dd34996354c574b93c68c66)',
 'RS_CORDON_Congestion_TR_2(5e5f2f3a39dc4507d3873251)',
 'RS_MILEAGE_Social_TR_13(5dd70ce159ca2a5c5a39b272)',
 'RS_CORDON_Social_Congestion_13(5e5f2f3a39dc4507d3873251)',
 'RS_MILEAGE_Social_TR_18(5dd6c42a59ca2a5c5a39b254)',
 'RS_MILEAGE_Congestion_TR_38(5dd74ddc59ca2a5c5a39b28c)',
 'RS_MILEAGE_Congestion_TR_21(5dd7d95759ca2a5c5a39b2c6)',
 'RS_MILEAGE_Social_TR_31(5dd9e6f2aa66dcb00e7c49f6)',
 'RS_MILEAGE_Social_TR_11(5dd6027759ca2a5c5a39b202)',
 'RS_CORDON_Social_Congestion_11(5e5bff6450b83111c4efd556)',
 'RS_CORDON_Social_TR_9(5e5f541f39dc4507d3873261)',
 'RS_MILEAGE_Congestion_TR_23(5dd714aa59ca2a5c5a39b275)',
 'RS_CORDON_Social_Congestion_14(5e5cfb6950b83111c4efd5bc)',
 'RS_MILEAGE_Social_TR_3(5dd967acaa66dcb00e7c49c1)',
 'RS_MILEAGE_Congestion_TR_22(5dd7419b59ca2a5c5a39b289)',
 'RS_MILEAGE_Social_TR_19(5dd7cb8559ca2a5c5a39b2c1)',
 'RS_MILEAGE_Congestion_TR_7(5dd9e381aa66dcb00e7c49f3)',
 'RS_MILEAGE_Congestion_TR_13(5dd53bd207017f4cef36e925)',
 'RS_MILEAGE_Social_TR_28(5dd9bc28aa66dcb00e7c49e4)',
 'RS_MILEAGE_Congestion_TR_32(5dd8acfdaa66dcb00e7c4970)',
 'RS_MILEAGE_Congestion_TR_3(5dd7f35859ca2a5c5a39b2d1)',
 'RS_CORDON_Social_Congestion_6(5e5c73b850b83111c4efd584)',
 'RS_MILEAGE_Congestion_TR_24(5dd7c21b59ca2a5c5a39b2bc)',
 'RS_MILEAGE_Social_TR_17(5dd3e4a1354c574b93c68ca7)',
 'RS_MILEAGE_Social_TR_20(5dd745f659ca2a5c5a39b28a)',
 'RS_CORDON_Social_TR_12(5e5c4db550b83111c4efd575)',
 'RS_MILEAGE_Social_TR_6(5dd4df2d07017f4cef36e903)',
 'RS_MILEAGE_Congestion_TR_25(5dd8041159ca2a5c5a39b2d7)',
 'RS_MILEAGE_Congestion_TR_29(5dd6172659ca2a5c5a39b20b)',
 'RS_MILEAGE_Congestion_TR_2(5dd7a88359ca2a5c5a39b2b3)',
 'RS_MILEAGE_Congestion_TR_9(5dd8d3a2aa66dcb00e7c4984)',
 'RS_MILEAGE_Congestion_TR_16(5dd6051459ca2a5c5a39b205)'];

document.addEventListener('DOMContentLoaded', function() {
    //console.log('document is ready. I can sleep now');
    var i;
    for (i = 0; i < contents.length; i++) {
        var tab = contents[i] + "-nav";
        //var content = contents[i];
        document.getElementById(tab).addEventListener("click", navTab, false);
    }
    constructDropdown(submissions);
    constructPanel(submissions[0], submissions[submissions.length-1]);

    document.getElementById("select-sub-1").addEventListener("change", swapSubmission1, false);
    document.getElementById("select-sub-2").addEventListener("change", swapSubmission2, false);
});

function constructDropdown(submissions) {
    var select1 = document.getElementById("select-sub-1");
    var select2 = document.getElementById("select-sub-2");

    var i;
    for (i=0; i < submissions.length; i++) {
        var option = document.createElement("option");
        if (i == 0) {option.selected = true;}
        option.value = submissions[i];
        option.insertAdjacentHTML( 'beforeend', submissions[i] );
        select1.appendChild(option);
    }

    for (i=0; i < submissions.length; i++) {
        var option = document.createElement("option");
        if (i == (submissions.length-1)) {option.selected = true;}
        option.value = submissions[i];
        option.insertAdjacentHTML( 'beforeend', submissions[i] );
        select2.appendChild(option);
    }
}

function navTab(event) {
    var tabId = this.id;
    var content = tabId.substring(0,tabId.length-4);
    //console.log(content);
    var activeDiv = document.getElementsByClassName("bk-bs-active");
    //console.log(activeDiv.length);
    // first remove all active status
    var i;
    var length = activeDiv.length;
    for (i = 0; i < length; i++) {
        //console.log(i);
        activeDiv[0].classList.remove("bk-bs-active");
    }
    // assign active status to selected name
    var tab = content + "-nav";
    document.getElementById(tab).classList.add("bk-bs-active");
    var panel = content + "-panel";
    document.getElementById(panel).classList.add("bk-bs-active");

}

function imgLayout(width, height, src) {
    var img = document.createElement("img");
    img.src = src;
    var canvas = document.createElement("div");
    canvas.className = "bk-canvas-wrapper";
    canvas.style.width = width;
    canvas.style.height = height;
    canvas.style.cursor = "default";
    canvas.appendChild(img);
    var plotWrapper = document.createElement("div");
    plotWrapper.className = "bk-plot-wrapper";
    plotWrapper.style.position = "absolute";
    plotWrapper.style.left = "0px";
    plotWrapper.style.top = "0px";
    plotWrapper.style.width = width;
    plotWrapper.style.height = height;
    plotWrapper.appendChild(canvas);
    var plotLayout = document.createElement("div");
    plotLayout.className = "bk-plot-layout bk-layout-fixed";
    plotLayout.style.position = "relative";
    plotLayout.style.width = width;
    plotLayout.style.height = height;
    plotLayout.appendChild(plotWrapper);
    return plotLayout;
}

function gridColumn(width, height) {
    var className = "bk-grid bk-grid-column bk-layout-fixed";
    return gridElement(width, height, className);
}

function gridRow(width, height) {
    var className = "bk-grid bk-grid-row bk-layout-fixed";
    return gridElement(width, height, className);
}

function gridElement(width, height, className) {
    var res = document.createElement("div");
    res.className = className;
    res.style.position="relative";
    res.style.width=width;
    res.style.height=height;
    return res
}


function constructPanel(sub1, sub2) {
    inputPanel(sub1, sub2);
    scorePanel(sub1, sub2);
    modePanel(sub1, sub2);
    servicePanel(sub1, sub2);
    congestionPanel(sub1, sub2);
    benefitPanel(sub1, sub2);
    tollPanel(sub1, sub2);
    sustanabilityPanel(sub1, sub2);
    // run the actual Bistro Dashboard and check how the structure of each panel
    // looks like. Here we are manually constructing the same html elements from
    // what bokeh has generated for the actual Bistro Dashboard.
}

function inputPanel(sub1, sub2) {
    var inputPanel = document.getElementById("input-panel");
    inputPanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["inputs/fleetmix_input.png", "inputs/routesched_input.png", 
                 "inputs/fares_input.png", "inputs/modeinc_input.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var outerCol = gridColumn("1200px", "1500px");
    var row = gridRow("1200px", "1500px");
    var subs = [sub1, sub2];
    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("600px", "1500px");

        var j;
        for (j=0; j<files.length; j++) {
            var src = figurePath+subs[i]+'/'+files[j];
            var layout = imgLayout("600px", "350px", src);
            column.appendChild(layout);
        }

        row.appendChild(column);
    }
    outerCol.appendChild(row);
    inputPanel.appendChild(outerCol);
}

function scorePanel(sub1, sub2) {
    var scorePanel = document.getElementById("score-panel");
    scorePanel.innerHTML = "";
    var outerCol = gridColumn("1200px", "1400px");
    var row = gridRow("1200px", "1400px");
    var innerCol = gridColumn("1200px", "1400px");
    var figurePath = "figures/";
    var scoreFile = ["normalized_scores.png", "casestudy_scores.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var subs = [sub1, sub2];
    var i;
    var j;
    for (j=0; j<scoreFile.length; j++) {
        var column = gridColumn("1200px", "700px");
        for (i=0; i<subs.length; i++){
            var src = figurePath+subs[i]+'/'+scoreFile[j];
            var layout = imgLayout("1200px", "350px", src);
            column.appendChild(layout);
        }
        innerCol.appendChild(column);
    }
    row.appendChild(innerCol);
    outerCol.appendChild(row);
    scorePanel.appendChild(outerCol);
}

function modePanel(sub1, sub2) {
    var modePanel = document.getElementById("mode-panel");
    modePanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["outputs/mode_planned_pie_chart.png",
                 "outputs/mode_realized_pie_chart.png", 
                 "outputs/mode_choice_by_time.png",
                 "outputs/mode_choice_by_income_group.png",
                 "outputs/mode_choice_by_age_group.png",
                 "outputs/mode_choice_by_distance.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var outerCol = gridColumn("1200px", "2200px");
    var row = gridRow("1200px", "2200px");
    var subs = [sub1, sub2];
    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("600px", "2200px");

        var j;
        for (j=0; j<files.length; j++) {
            var src = figurePath+subs[i]+'/'+files[j];
            var height = (j < 2) ? "400px" : "350px";
            var layout = imgLayout("600px", height, src);
            column.appendChild(layout);
        }

        row.appendChild(column);
    }
    outerCol.appendChild(row);
    modePanel.appendChild(outerCol);
}

function servicePanel(sub1, sub2) {
    var servicePanel = document.getElementById("service-panel");
    servicePanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["outputs/los_travel_expenditure.png",
                 "outputs/los_crowding.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var outerCol = gridColumn("1200px", "700px");
    var row = gridRow("1200px", "700px");
    var subs = [sub1, sub2];
    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("600px", "700px");

        var j;
        for (j=0; j<files.length; j++) {
            var src = figurePath+subs[i]+'/'+files[j];
            var layout = imgLayout("600px", "350px", src);
            column.appendChild(layout);
        }

        row.appendChild(column);
    }
    outerCol.appendChild(row);
    servicePanel.appendChild(outerCol);
}

function congestionPanel(sub1, sub2) {
    var congestionPanel = document.getElementById("congestion-panel");
    congestionPanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["outputs/congestion_travel_time_by_mode.png",
                 "outputs/congestion_travel_time_per_passenger_trip.png",
                 "outputs/congestion_miles_traveled_per_mode.png",
                 "outputs/congestion_car_vmt_by_time.png",
                 "outputs/congestion_bus_vmt_by_ridership.png",
                 "outputs/congestion_on_demand_vmt_by_phases.png",
                 "outputs/congestion_travel_speed.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var outerCol = gridColumn("1600px", "2450px");
    var row = gridRow("1600px", "2450px");
    var subs = [sub1, sub2];
    var weights = ["700px","800px","600px","700px","600px","700px","700px"];
    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("800px", "2450px");
        var j;
        for (j=0; j<files.length; j++) {
            var src = figurePath+subs[i]+'/'+files[j];
            var layout = imgLayout(weights[j], "350px", src);
            column.appendChild(layout);
        }

        row.appendChild(column);
    }
    outerCol.appendChild(row);
    congestionPanel.appendChild(outerCol);
}

function benefitPanel(sub1, sub2) {
    var benefitPanel = document.getElementById("benefit-panel");
    benefitPanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["outputs/transit_cb.png",
                 "outputs/transit_inc_by_mode.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var outerCol = gridColumn("1200px", "700px");
    var row = gridRow("1200px", "700px");
    var subs = [sub1, sub2];
    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("600px", "700px");

        var j;
        for (j=0; j<files.length; j++) {
            var src = figurePath+subs[i]+'/'+files[j];
            var layout = imgLayout("600px", "350px", src);
            column.appendChild(layout);
        }

        row.appendChild(column);
    }
    outerCol.appendChild(row);
    benefitPanel.appendChild(outerCol);
}

function tollPanel(sub1, sub2) {
    var tollPanel = document.getElementById("toll-panel");
    tollPanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["outputs/toll_revenue_by_time.png",
                 "inputs/toll_circle.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var heights = ["350px","600px"];
    var outerCol = gridColumn("1200px", "950px");
    var row = gridRow("1200px", "950px");
    var subs = [sub1, sub2];

    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("600px", "950px");

        var j;
        for (j=0; j<files.length; j++) {
            var src = figurePath+subs[i]+'/'+files[j];
            var layout = imgLayout("600px", heights[j], src);
            column.appendChild(layout);
        }

        row.appendChild(column);
    }
    outerCol.appendChild(row);
    tollPanel.appendChild(outerCol);
}

function sustanabilityPanel(sub1, sub2) {
    var sustanabilityPanel = document.getElementById("sustainability-panel");
    sustanabilityPanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["outputs/sustainability_25pm_per_mode.png",
                 "outputs/sustainability_ghg_per_mode.png"];
    // remember to change the size of columns and rows below if you want to
    // add or remove plots in the list above.
    var outerCol = gridColumn("1200px", "700px");
    var row = gridRow("1200px", "700px");
    var subs = [sub1, sub2];
    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("600px", "700px");
        var j;
        for (j=0; j<files.length; j++) {
            var src = figurePath+subs[i]+'/'+files[j];
            var layout = imgLayout("600px", "350px", src);
            column.appendChild(layout);
        }
        row.appendChild(column);
    }
    outerCol.appendChild(row);
    sustanabilityPanel.appendChild(outerCol);
}

function swapSubmission1(event) {
    var sub1 = this.value
    var sub2 = document.getElementById("select-sub-2").value;
    constructPanel(sub1, sub2);
}

function swapSubmission2(event) {
    var sub1 = document.getElementById("select-sub-1").value;
    var sub2 = this.value;
    constructPanel(sub1, sub2);
}
