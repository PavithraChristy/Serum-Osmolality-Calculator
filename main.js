function calc()
    {
        na=document.getElementById("na").value;
        bun=document.getElementById("bun").value;
        glu=document.getElementById("glu").value;
        et=document.getElementById("et").value;
        osm = 2 * na + (bun/2.8) + (glu/18) + (et/4.6);
        osm_d = osm.toFixed(2);
        document.getElementsByName("rk1")[0].value = osm_d;
        
        if(osm_d >= 275.00 && osm_d <= 295.00)
        {	
            document.getElementById("r").innerHTML = "<b>Normal Serum Osmolality</b>";
        }
        else if(osm_d > 295.00)
        {
            document.getElementById("r").innerHTML = 
            "<b>High Serum Osmolality</b><br>Maybe due to any of these conditions:<br>Hypernatremia (too much sodium)<br>Diabetes insipidus (the kidneys make too much urine)<br>Dehydration (low fluid levels throughout the body)<br>Uremia (too much urea and other waste products in the blood)<br>Hyperglycemia (high blood sugar)<br>Ingestion of a toxic substance (ethanol and other alcohols)<br>Diabetic ketoacidosis"; 
        }
        else
        {
            document.getElementById("r").innerHTML = "<b>Low Serum Osmolality</b><br>Maybe due to any of these conditions:<br>Hyponatremia(too little sodium)<br>Overhydration (too much fluid retained in the body)";
        }
    }
    
function myFunction() {
    document.getElementById("form").reset();
    }
    
