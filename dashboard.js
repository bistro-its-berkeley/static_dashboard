"use strict";

let tabs = ["input-nav", "score-nav", "mode-nav", "service-nav",
            "congestion-nav", "benefit-nav", "toll-nav", "sustainability-nav"];
let panels = ["input-panel", "score-panel", "mode-panel", "service-panel",
              "congestion-panel", "benefit-panel", "toll-panel", 
              "sustainability-panel"];
let contents = ["input", "score", "mode", "service", "congestion", "benefit",
               "toll", "sustainability"];

let submissions = ['Sioux-Faux-BAU@2019-11-12 21:31:09',
 'pareto_Aggregate_Congestion-1@2019-11-21 15:26:56',
 'pareto_Aggregate_Social-1@2019-11-21 15:26:56',
 'pareto_Aggregate_toll_revenue-1@2019-11-21 15:26:56',
 'pareto_Aggregate_toll_revenue-2@2019-11-19 17:18:00',
 'pareto_Aggregate_toll_revenue-3@2019-11-21 14:42:10',
 'pareto_Aggregate_toll_revenue-4@2019-11-19 08:39:28',
 'pareto_Congestion_Social-1@2019-11-21 15:26:56',
 'pareto_Congestion_Toll_revenue-1@2019-11-21 15:26:56',
 'pareto_Congestion_Toll_revenue-2@2019-11-21 13:16:05',
 'pareto_Congestion_Toll_revenue-3@2019-11-19 17:18:00',
 'pareto_Congestion_Toll_revenue-4@2019-11-19 09:46:23',
 'pareto_Congestion_Toll_revenue-5@2019-11-19 08:39:28',
 'pareto_Social_Toll_revenue-1@2019-11-21 15:26:56',
 'pareto_Social_Toll_revenue-2@2019-11-20 13:12:56',
 'pareto_Social_Toll_revenue-3@2019-11-22 11:23:56',
 'pareto_Social_Toll_revenue-4@2019-11-21 14:42:10',
 'pareto_Social_Toll_revenue-5@2019-11-21 11:19:16',
 'pareto_car_04_aggregate_congestion-1@2019-11-20 07:38:18',
 'pareto_car_04_aggregate_congestion-2@2019-11-18 22:59:56',
 'pareto_car_04_aggregate_congestion-3@2019-11-22 13:18:03',
 'pareto_car_04_aggregate_congestion-4@2019-11-19 22:48:58',
 'pareto_car_04_aggregate_social-1@2019-11-20 07:38:18',
 'pareto_car_04_aggregate_social-2@2019-11-22 00:15:37',
 'pareto_car_04_aggregate_toll_rev-1@2019-11-20 07:38:18',
 'pareto_car_04_aggregate_toll_rev-2@2019-11-21 17:30:13',
 'pareto_car_04_aggregate_toll_rev-3@2019-11-19 17:18:00',
 'pareto_car_04_aggregate_toll_rev-4@2019-11-21 14:42:10',
 'pareto_car_04_aggregate_toll_rev-5@2019-11-19 08:39:28',
 'pareto_car_04_congestion_social-1@2019-11-21 23:49:10',
 'pareto_car_04_congestion_social-2@2019-11-19 22:48:58',
 'pareto_car_04_congestion_social-4@2019-11-22 13:18:03',
 'pareto_car_04_congestion_social-5@2019-11-18 22:59:56',
 'pareto_car_04_congestion_social-6@2019-11-20 07:38:18',
 'pareto_car_04_congestion_social-7@2019-11-22 00:15:37',
 'pareto_car_04_congestion_toll_rev-2@2019-11-22 13:18:03',
 'pareto_car_04_congestion_toll_rev-3@2019-11-18 22:59:56',
 'pareto_car_04_congestion_toll_rev-4@2019-11-21 23:01:22',
 'pareto_car_04_congestion_toll_rev-5@2019-11-20 11:47:09',
 'pareto_car_04_congestion_toll_rev-6@2019-11-21 13:16:05',
 'pareto_car_04_congestion_toll_rev-7@2019-11-19 17:18:00',
 'pareto_car_04_congestion_toll_rev-8@2019-11-19 09:46:23',
 'pareto_car_04_congestion_toll_rev-9@2019-11-19 08:39:28',
 'pareto_car_04_social_toll_rev-1@2019-11-22 00:15:37',
 'pareto_car_04_social_toll_rev-2@2019-11-21 17:30:13',
 'pareto_car_04_social_toll_rev-3@2019-11-19 12:58:55',
 'pareto_car_04_social_toll_rev-4@2019-11-20 13:12:56',
 'pareto_car_04_social_toll_rev-5@2019-11-22 11:23:56',
 'pareto_car_04_social_toll_rev-6@2019-11-21 14:42:10',
 'pareto_car_04_social_toll_rev-7@2019-11-21 11:19:16'];

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
}

function inputPanel(sub1, sub2) {
    var inputPanel = document.getElementById("input-panel");
    inputPanel.innerHTML = "";
    var figurePath = "figures/";
    var files = ["inputs/fleetmix_input.png", "inputs/routesched_input.png", 
                 "inputs/fares_input.png", "inputs/modeinc_input.png"];
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
    var outerCol = gridColumn("1200px", "700px");
    var row = gridRow("1200px", "700px");
    var innerCol = gridColumn("1200px", "700px");
    var figurePath = "figures/";
    var scoreFile = "normalized_scores.png";
    var subs = [sub1, sub2];
    var i;
    for (i=0; i<subs.length; i++){
        var src = figurePath+subs[i]+'/'+scoreFile;
        var layout = imgLayout("1200px", "350px", src);
        var column = gridColumn("1200px", "350px");
        column.appendChild(layout);
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
    var files = ["outputs/sustainability_25pm_per_mode.png"];
    var outerCol = gridColumn("1200px", "350px");
    var row = gridRow("1200px", "350px");
    var subs = [sub1, sub2];
    var i;
    for (i=0; i<subs.length; i++){
        var column = gridColumn("600px", "350px");
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
